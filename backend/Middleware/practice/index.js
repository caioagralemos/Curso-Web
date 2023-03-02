const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny')) // função que roda em qualquer request
app.use((req, res, next) => {
    // faz uma coisa parecida com o que o morgan faz
    console.log(req.method.toUpperCase()) // printa o método do req
    req.requestTime = Date.now()
    next() // continua a executar normal
})
app.use('/dogs', (req, res, next) => {
    // é possível usar app.use em rotas, e ainda assim o get vai ser executado
    console.log(`I love dogs!`)
    next()
})

app.get('/', (req, res) =>{
    res.send('Home page!')
    console.log(`REQUEST DATE: ${req.requestTime}`)
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF')
})

app.use((req, res) => {
    // colocar um use por último funciona como uma 404 Route
    // status 404 retorna o status
    res.status(404).send("404 not found!")
})

app.listen(4000, () => {
    console.log("rodando em localhost:4000")
})