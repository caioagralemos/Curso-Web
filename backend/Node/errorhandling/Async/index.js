// método básico, use try e catch e passe next por parâmetro

const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require('method-override')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

const Product = require('./modules/product')
const AppError = require("./apperror.js")

const categories = ['fruta', 'vegetal', 'cereal']

mongoose.connect('mongodb://127.0.0.1:27017/shopDB')
    .then(() => {
        console.log("mongo worked!")
    })
    .catch(err => {
        console.log(`mongo error: ${err}`)
    })

app.get("/", async (req, res, next) => {
    try {
    const {category} = req.query
    if (category) {
        const produtos = await Product.find({category})
        res.render("allproducts.ejs", { produtos , category })
    } else {
        const produtos = await Product.find({})
        // esse comando será MUITO usado.
        res.render("allproducts.ejs", { produtos, category:"produtos" })
    }
    } catch (e) {
        next(e)
    }
})

app.get('/products/new', (req, res) => {
    res.render('newproduct.ejs', {categories})
})

app.post('/products', async (req, res, next) => {
    try {
    let newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e)
    }
})

app.get('/products/:id', async (req, res, next) => {
    try{
    const { id } = req.params
    const product = await Product.findById(id)
    res.render("details.ejs", { product })
    } catch(e) {
        next(e) // qualquer coisa que der errado vai jogar nesse erro
    }
})

app.get('/products/:id/edit', async (req, res, next) => {
    try {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('editproduct.ejs', { product, categories })
    } catch (e) {
        next(e)
    }
})

app.put('/products/:id', async (req, res, next) => {
    try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect(`/products/${product._id}`)
    } catch (e) {
        next(e)
    }
})

app.delete('/products/:id', async(req,res, next) => {
    try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('allproducts.ejs')
    } catch (e) {
        next (e)
    }
})

app.use((err, req, res, next) => {
    const { status = 500 } = err //500 = default value para tratar erros de js
    const { message = "something went wrong" } =  err
    res.status(status).send(`- ${status} -\n ${message}`)
})


app.listen(8080, () => {
    console.log("listening on localhost:8080")
})