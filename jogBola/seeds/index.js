const mongoose = require('mongoose')
const Campo = require('../models/campo')
const campos = require('./seeds')
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const mapboxToken = 'pk.eyJ1IjoiY2Fpb2FncmFsZW1vcyIsImEiOiJjbGYyMzJvOHgwZWkyNDRsY205c25uMHE0In0.-2pFj63Kdxg8PngWnpAvjA'
const geocoder = mbxGeocoding({ accessToken: mapboxToken })

mongoose.connect('mongodb://localhost:27017/jogBola', {
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
        const geoData = await geocoder.forwardGeocode({
            query: `${campo.endereco}, ${campo.cidade}`,
            limit: 1
        }).send()
        campo.geometry = geoData.body.features[0].geometry
        campo.verificado = false
        await campo.save()
    }
    console.log("pronto!")
}

seedDB().then(() => {
    mongoose.connection.close()
})