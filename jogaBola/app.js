const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const Campo = require('./models/campo')
const Review = require('./models/review')
const ExpressError = require('./utils/ExpressError')
const catchAsync = require('./utils/catchAsync')
const Joi = require('joi')

mongoose.connect('mongodb://localhost:27017/jogaBola', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'erro na conexão com o banco de dados'))
db.once('open', () => {
    console.log("conectado ao banco de dados")
})

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const validateCampo = (req, res, next) => {
    let campoSchemaVAL = Joi.object({
        campo: Joi.object({
            titulo: Joi.string().required(),
            imagem: Joi.string().required(),
            preco: Joi.number().required().min(0),
            descricao: Joi.string().required(),
            local: Joi.string().required()
        }).required()
    })
    const { error } = campoSchemaVAL.validate(req.body)
    if(error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)
        throw new ExpressError("Algo deu errado com sua submissão", 400)
    } else {
        next()
    }
}

const validateReview = (req, res, next) => {
    let reviewSchemaVAL = Joi.object({
        review: Joi.object({
            body: Joi.string().required(),
            rating: Joi.number().required()
        }).required()
    })
    const {error} = reviewSchemaVAL.validate(req.body)
    if (error) {
        console.log(error)
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/campos", catchAsync(async (req, res, next) => {
    const campos = await Campo.find({})
    res.render("campos/index.ejs", { campos })
}))

app.get("/campos/new", (req, res) => {
    // tem que vir antes do que mexe com id se não new vai ser tratado como id
    res.render("campos/new.ejs")
})

app.post("/campos", validateCampo, catchAsync(async (req, res, next) => {
    let novoCampo = new Campo(req.body.campo)
    await novoCampo.save()
    res.redirect(`/campos/${novoCampo._id}`)
}))

app.get("/campos/:id", catchAsync(async (req, res, next) => {
    const { id } = req.params
    const essecampo = await Campo.findById(id).populate('reviews')
    console.log(essecampo)
    res.render("campos/show.ejs", { essecampo })
}))

app.get("/campos/:id/edit", catchAsync(async (req, res, next) => {
    const essecampo = await Campo.findById(req.params.id)
    res.render("campos/edit.ejs", { essecampo })
}))

app.put("/campos/:id", validateCampo, catchAsync(async (req, res, next) => {
    if (!req.body.campo) throw new ExpressError('Algo deu Errado', 400)
    const { id } = req.params
    const campo = await Campo.findByIdAndUpdate(id, { ...req.body.campo })
    res.redirect(`/campos/${id}`)
}))

app.delete('/campos/:id', catchAsync(async (req, res, next) => {
    const { id } = req.params
    await Campo.findByIdAndDelete(id)
    res.redirect('/campos/')
}))

app.post('/campos/:id/reviews', validateReview, catchAsync(async(req,res) => {
    const campo = await Campo.findById(req.params.id)
    const review = new Review(req.body.review)
    campo.reviews.push(review)
    await review.save()
    await campo.save()
    res.redirect(`/campos/${campo._id}`)
}))

app.delete('/campos/:id/reviews/:reviewId', catchAsync(async (req,res) => {
    Campo.findByIdAndUpdate(req.params.id, {$pull: {reviews: req.params.reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId)
    res.redirect(`/campos/${req.params.id}`)
}))

app.all("*", (req, res, next) => {
    next(new ExpressError('Pagina não encontrada', 404))
})

app.use((err, req, res, next) => {
    console.log(err)
    const {statusCode = 500, message = "Algo deu errado"} = err
    res.status(statusCode).render('campos/error.ejs', {statusCode, message})
})

app.listen(3000, () => {
    console.log("ligado no port 3000")
})
