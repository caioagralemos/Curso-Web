const express = require("express")
const app = express()
const path = require("path")
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(session({secret: 'mysecret'}))
app.use(flash())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

const Product = require('./modules/product')

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')
    .then(() => {
        console.log("mongo worked!")
    })
    .catch(err => {
        console.log(`mongo error: ${err}`)
    })

app.use((req, res, next) => {
    res.locals.messages = req.flash(success)
    next()
})

app.get("/", async (req, res) => {
    const products = await Product.find({})
    res.render("all.ejs", { products })
})

app.get('/new', async (req, res) => {
    res.render('new.ejs')
})

app.post('/products', async (req, res) => {
    let newProduct = new Product(req.body)
    await newProduct.save()
    req.flash('success', 'Novo produto adicionado com sucesso!')
    res.redirect(`/`)
})

app.listen(8080, () => {
    console.log("listening on localhost:8080")
})