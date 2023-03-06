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
    },
    category: {
        type: String,
        // produto pode ser fruta ou vegetal
        enum: ["fruta", "vegetal", "cereal"],
        lowercase: true
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product