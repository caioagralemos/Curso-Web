const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    }
})

const Product = mongoose.model('Produto', productSchema)

module.exports = Product