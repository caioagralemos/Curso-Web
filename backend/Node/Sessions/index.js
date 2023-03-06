const express = require('express')
const app = express()
const session = require('express-session')

let sessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false}
app.use(session(sessionOptions))

app.get('/viewcount', (req, res) => {
    if(req.session.count) {
        req.session.count += 1
    } else {
        req.session.count = 1
    }
    res.send(`u hav visited this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query
    req.session.username = username
    res.redirect('/')
})

app.get('/', (req, res) => {
    const {username = "Stranger"} = req.session
    res.send(`Welcome back, ${username}`)
})

app.listen(8080, () => {
    console.log('live @ 8080')
})