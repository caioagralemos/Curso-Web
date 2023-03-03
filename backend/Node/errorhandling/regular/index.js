const express = require('express')
const AppError = require('./apperror')
const app = express()


app.use((req, res, next) => {
    console.log(req.method.toUpperCase())
    req.requestTime = Date.now()
    next()
})

app.get('/', (req, res) =>{
    res.send('Home page!')
    console.log(`REQUEST DATE: ${req.requestTime}`)
})

app.get('/admin', (req, res) =>{
    throw new AppError('You are not an admin!', 403)
})

app.get('/erro', (req, res) =>{
    // funcao com erro
    meuerro.paralamas()
})

const checkPassword = (req, res, next) => {
    // protegendo rota especifica por que passamos por parâmetro
    const { password } = req.query
    if(password === 'chickennugget'){
        next()
    } else {
        res.status(401)
        throw new AppError("password required!") // agora nosso erro tem 
        // express default error handling
        // trata todos os erros igualmente
        // responde com um 500 e cria uma pagina que mostra o err
    }
}

app.get('/secret', checkPassword, (req, res) => {
    // é possível passar uma função como parâmetro por callback
    res.send("as vezes eu invento uma bizarrice so pra dar desculpa pra nao ir pra alguma coisa")
})

// app.use(function(err, req, res, next) {
//     // CRIANDO UMA ERROR-HANDLING MIDDLEWARE FUNCTION (4 ARG)
//     // a partir de agora qualquer erro vai ser tratado dessa maneira (repoe o middleware default)
//     console.log("@@@@@@@ERRO@@@@@@@@")
//     console.error(err.stack)
//     next(err) // botar o next no final continua a executar o codigo
//     // e com isso, a maneira default de error handling volta a ser executada
//     // porém, além da execução padrão, será executada essa função
// })

app.use((err, req, res, next) => {
    const { status = 500 } = err //500 = default value para tratar erros de js
    const { message = "something went wrong" } =  err
    res.status(status).send(message)
})

app.listen(4000, () => {
    console.log("rodando em localhost:4000")
})