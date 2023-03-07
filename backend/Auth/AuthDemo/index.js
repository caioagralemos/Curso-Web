express = require('express')
app = express()
User = require('./models/user')
path = require('path')
mongoose = require('mongoose')
bcrypt = require('bcrypt')
session = require('express-session')

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({extended: true}))
app.use(session({secret: 'notagoodsecret'}))

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log("mongo worked!")
    })
    .catch(err => {
        console.log(`mongo error: ${err}`)
    })

const requireLogin = (req, res, next) => {
    if(!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}


app.get('/', (req, res) => {
    res.send('home')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', async (req, res) => {
    const { password, username } = req.body
    const user = new User({ username, password })
    await user.save()
    req.session.user_id = user._id
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if(foundUser){
        req.session.user_id = foundUser._id
        res.redirect('/topsecret')
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null
    req.session.destroy()
    res.redirect('/login')
})

app.get('/topsecret', requireLogin ,(req, res) => {
    res.render('topsecret.ejs')
})

app.get('/account', requireLogin, (req, res) => {
    res.send('ur account! you are currently logged in')
})

app.listen(4000, () => {
    console.log('live @ 4000')
})