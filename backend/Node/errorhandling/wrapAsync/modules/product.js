const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'nome não pode estar em branco'],
        lowercase: true
    },
    price:{
        type: Number,
        required: [true, 'precisamos saber o preço'],
        min: 0
    },
    category: {
        type: String,
        // produto pode ser fruta ou vegetal
        enum: ["fruta", "vegetal", "cereal"],
        lowercase: true
    }
})

const Product = mongoose.model('Produto', productSchema)

module.exports = Product