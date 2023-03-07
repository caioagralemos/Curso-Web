const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const ExpressError = require('./utils/ExpressError')
const campoRoutes = require('./routes/campos')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const localStrategy = require('passport-local')
const User = require('./models/user')

mongoose.set('strictQuery', false)

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

const sessionConfig = {
    secret: 'placeholdersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash())

app.use(passport.initialize()) // inicializa o passport
app.use(passport.session()) // mantem a sessão
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.use('/', userRoutes)
app.use('/campos', campoRoutes)
app.use('/campos/:id/reviews', reviewRoutes)

app.get("/", (req, res) => {
    res.render("home.ejs")
})

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