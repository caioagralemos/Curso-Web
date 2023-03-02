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

// app.use((req, res, next) => {
//     // protegendo todas as rotas
//     const { password } = req.query
//     if(password === 'chickennugget'){
//         next()
//     } else {
//         res.send("Sorry you need a password")
//     }
// })

const checkPassword = (req, res, next) => {
    // protegendo rota especifica por que passamos por parâmetro
    const { password } = req.query
    if(password === 'chickennugget'){
        next()
    } else {
        res.send("Sorry you need a password")
    }
}

app.get('/secret', checkPassword, (req, res) => {
    // é possível passar uma função como parâmetro por callback
    res.send("as vezes eu invento uma bizarrice so pra dar desculpa pra nao ir pra alguma coisa")
})

app.listen(4000, () => {
    console.log("rodando em localhost:4000")
})