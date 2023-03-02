const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny')) // função que roda em qualquer request
app.use((req, res, next) => {
    console.log("My first middleware")
    next() // chamar next aqui executa o app.use e faz com que a requisição
    // continue a procurar outro parâmetro em que ela se encaixe
    console.log("isso aqui é printado no console depois que o primeiro next é executado")
})

app.use((req, res, next) => {
    console.log("My second middleware")
    return next() // colocar return desabilita qualquer coisa que for declarada depois do next
    console.log("isso aqui é printado no console depois que o segundo next é executado")
})

app.get('/', (req, res) =>{
    res.send('Home page!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF')
})

app.listen(4000, () => {
    console.log("rodando em localhost:4000")
})