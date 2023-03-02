const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const Campo = require('./models/campo')

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

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/campos", async (req, res) => {
    const campos = await Campo.find({})
    res.render("campos/index.ejs", {campos})
})

app.get("/campos/new", async (req, res) => {
    // tem que vir antes do que mexe com id se não new vai ser tratado como id
    res.render("campos/new.ejs")
})

app.post("/campos", async (req, res) => {
    let novoCampo = new Campo(req.body.campo)
    await novoCampo.save()
    res.redirect(`/campos/${novoCampo._id}`)
})

app.get("/campos/:id", async (req, res) => {
    const { id } = req.params
    const essecampo = await Campo.findById(id)
    res.render("campos/show.ejs", {essecampo})
})

app.get("/campos/:id/edit", async (req, res) => { 
    const essecampo = await Campo.findById(req.params.id)
    res.render("campos/edit.ejs", {essecampo})
})

app.put("/campos/:id", async (req, res) => {
    const { id } = req.params
    const campo = await Campo.findByIdAndUpdate(id, {...req.body.campo})
    res.redirect(`/campos/${id}`)
})

app.delete('/campos/:id', async (req, res) => {
    const { id } = req.params
    await Campo.findByIdAndDelete(id)
    res.redirect('/campos')
})

app.listen(3000, () => {
    console.log("ligado no port 3000")
})
