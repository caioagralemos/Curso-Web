const mongoose = require('mongoose')
const Product = require('./modules/product')

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')
.then(() =>{
    console.log("mongo worked!")
})
.catch(err => {
    console.log(`mongo error: ${err}`)
})


const product0 = new Product ({name: "uva", price: 2})
product0.save().then(product0 => console.log(product0)).catch(err => console.log(err))

const product1 = new Product({name: "banana", price: 1.5})
product1.save().then(p => console.log(p)).catch(err => console.log(err))

const product2 = new Product({name: "tomate", price: 2.3})
product2.save().then(p => console.log(p)).catch(err => console.log(err))

const product3 = new Product({name: "aveia", price: 4})
product3.save().then(p => console.log(p)).catch(err => console.log(err))

const product4 = new Product({name: "abacate", price: 3.5})
product4.save().then(p => console.log(p)).catch(err => console.log(err))

const product5 = new Product({name: "cenoura", price: 1.2})
product5.save().then(p => console.log(p)).catch(err => console.log(err))