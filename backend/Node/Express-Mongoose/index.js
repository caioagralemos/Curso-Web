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

const categories = ['fruta', 'vegetal', 'cereal']

mongoose.connect('mongodb://127.0.0.1:27017/shopDB')
    .then(() => {
        console.log("mongo worked!")
    })
    .catch(err => {
        console.log(`mongo error: ${err}`)
    })

app.get("/", async (req, res) => {
    const {category} = req.query
    if (category) {
        const produtos = await Product.find({category})
        res.render("allproducts.ejs", { produtos , category })
    } else {
        const produtos = await Product.find({})
        // esse comando será MUITO usado.
        res.render("allproducts.ejs", { produtos, category:"produtos" })
    }
})

app.get('/products/new', async (req, res) => {
    res.render('newproduct.ejs', {categories})
})

app.post('/products', async (req, res) => {
    let newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render("details.ejs", { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('editproduct.ejs', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async(req,res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('allproducts.ejs')
})

app.listen(8080, () => {
    console.log("listening on localhost:8080")
})