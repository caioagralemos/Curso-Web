const mongoose = require('mongoose')
const Product = require('./modules/product')

mongoose.connect('mongodb://127.0.0.1:27017/shopDB')
.then(() =>{
    console.log("mongo worked!")
})
.catch(err => {
    console.log(`mongo error: ${err}`)
})


// const product0 = new Product ({name: "uva", price: 2, category: "fruta"})
// product0.save().then(product0 => console.log(product0)).catch(err => console.log(err))

// const product1 = new Product({name: "banana", price: 1.5, category: "fruta"})
// product1.save().then(p => console.log(p)).catch(err => console.log(err))

// const product2 = new Product({name: "tomate", price: 2.3, category: "vegetal"})
// product2.save().then(p => console.log(p)).catch(err => console.log(err))

// const product3 = new Product({name: "aveia", price: 4, category: "cereal"})
// product3.save().then(p => console.log(p)).catch(err => console.log(err))

// const product4 = new Product({name: "abacate", price: 3.5, category: "fruta"})
// product4.save().then(p => console.log(p)).catch(err => console.log(err))

// const product5 = new Product({name: "cenoura", price: 1.2, category: "vegetal"})
// product5.save().then(p => console.log(p)).catch(err => console.log(err))