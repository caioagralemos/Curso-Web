const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campoSchema = new Schema ({
    titulo: String,
    preco: String,
    descricao: String,
    local: String
})

module.exports = mongoose.model('Campo', campoSchema)