const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    const { name = 'Stranger' } = req.cookies
    res.send(`Hey there, ${name} :)`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta')
    res.cookie('animal','starfish')
    res.send('ok sent you a cookie!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('ok signed ur fruit cookie')
})

app.get('/seecookies', (req, res) => {
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/seesignedcookies', (req, res) => {
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000,  () => {
    console.log('live @ 3000')
})