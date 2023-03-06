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
const Farm = require('./modules/farm')

const categories = ['fruta', 'vegetal', 'cereal']

mongoose.connect('mongodb://127.0.0.1:27017/dataRel')
    .then(() => {
        console.log("mongo worked!")
    })
    .catch(err => {
        console.log(`mongo error: ${err}`)
    })

// PRODUCT ROUTES

app.get("/products", async (req, res) => {
    const {category} = req.query
    if (category) {
        const produtos = await Product.find({category})
        res.render("products/allproducts.ejs", { produtos , category })
    } else {
        const produtos = await Product.find({})
        // esse comando será MUITO usado.
        res.render("products/allproducts.ejs", { produtos, category:"produtos" })
    }
})

app.get('/products/new', async (req, res) => {
    res.render('products/new.ejs', {categories})
})

app.post('/products', async (req, res) => {
    let newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id).populate('farm')
    res.render("products/show.ejs", { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit.ejs', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async(req,res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products/allproducts.ejs')
})

// FARM ROUTES

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({}).populate('products')
    res.render('farms/allfarms.ejs', {farms})
})

app.get('/farms/new', async (req, res) => {
    res.render('farms/new.ejs')
})

app.post('/farms', async (req, res) => {
    let newFarm = new Farm(req.body)
    await newFarm.save()
    console.log(newFarm)
    res.redirect(`farms/${newFarm._id}`)
})

app.get('/farms/:id', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id).populate('products')
    res.render("farms/show.ejs", { farm })
})

app.get('/farms/:id/edit', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    res.render("farms/edit.ejs", { farm })
})

app.put('/farms/:id', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect(`/farms/${farm._id}`)
})

app.delete('/farms/:id', async(req,res) => {
    const { id } = req.params
    await Farm.findByIdAndDelete(id)
    res.redirect('/farms/')
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    res.render('products/new.ejs', {categories, farm})
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    const {name, price, category} = req.body
    const product = new Product({name,price,category})
    farm.products.push(product)
    product.farm = farm
    await farm.save()
    await product.save()
    res.redirect(`/farms/${id}`)
})

app.delete('/farms/:id', async(req,res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id)
    res.redirect('/farms')
})

app.listen(8080, () => {
    console.log("listening on localhost:8080")
})