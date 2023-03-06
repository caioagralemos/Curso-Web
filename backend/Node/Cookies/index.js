const express = require('express')
const app = express()

app.get('/greet', (req, res) => {
    res.send('Hey there :)')
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta')
    res.cookie('animal','starfish')
    res.send('ok sent you a cookie!')
})

app.listen(3000,  () => {
    console.log('live @ 3000')
})