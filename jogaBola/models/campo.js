const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campoSchema = new Schema ({
    titulo: String,
    imagem: String,
    preco: Number,
    descricao: String,
    local: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('Campo', campoSchema)