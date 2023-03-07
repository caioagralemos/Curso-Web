const mongoose = require('mongoose')
const Campo = require('../models/campo')
const campos = require('./seeds')

mongoose.connect('mongodb://localhost:27017/jogaBola', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'erro na conexão com o banco de dados'))
db.once('open', () => {
    console.log("conectado ao banco de dados")
})

const seedDB = async () => {
    await Campo.deleteMany({}) // deleta todos os campos no banco de dados
    for (let campo of campos) {
        await campo.save()
    }
    console.log("pronto!")
}

seedDB().then(() => {
    mongoose.connection.close()
})