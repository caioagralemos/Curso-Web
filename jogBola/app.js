require('dotenv').config()

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const ExpressError = require('./utils/ExpressError')
const campoRoutes = require('./routes/campos')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const localStrategy = require('passport-local')
const User = require('./models/user')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost:27017/jogBola', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'erro na conexão com o banco de dados'))
db.once('open', () => {
    console.log("conectado ao banco de dados")
})

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(mongoSanitize())
const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net/",
    "https://res.cloudinary.com/dv5vm4sqh/"
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net/",
    "https://res.cloudinary.com/dv5vm4sqh/"
];
const connectSrcUrls = [
    "https://*.tiles.mapbox.com",
    "https://api.mapbox.com",
    "https://events.mapbox.com",
    "https://res.cloudinary.com/dv5vm4sqh/"
];
const fontSrcUrls = [ "https://res.cloudinary.com/dv5vm4sqh/" ];
 
app.use(
    helmet.contentSecurityPolicy({
        directives : {
            defaultSrc : [],
            connectSrc : [ "'self'", ...connectSrcUrls ],
            scriptSrc  : [ "'unsafe-inline'", "'self'", ...scriptSrcUrls ],
            styleSrc   : [ "'self'", "'unsafe-inline'", ...styleSrcUrls ],
            workerSrc  : [ "'self'", "blob:" ],
            objectSrc  : [],
            imgSrc     : [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
                "https://images.unsplash.com/",
                "https://i.imgur.com"
            ],
            fontSrc    : [ "'self'", ...fontSrcUrls ],
            mediaSrc   : [ "https://res.cloudinary.com/dv5vm4sqh/" ],
            childSrc   : [ "blob:" ]
        }
    })
);

const sessionConfig = {
    name: 'panda.campolocal1',
    secret: 'placeholdersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session({
    secret: 'chavesecretanaotaosecreta--jogbola.com',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // define a validade do cookie para 7 dias
  }))
app.use(flash())

app.use(passport.initialize()) // inicializa o passport
app.use(passport.session()) // mantem a sessão
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.currentUser = req.user
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    app.locals.req = req;
    next()
})

app.use('/', userRoutes)
app.use('/campos', campoRoutes)
app.use('/campos/:id/reviews', reviewRoutes)

app.get("/", (req, res) => {
    res.render("home/home.ejs")
})

app.all("*", (req, res, next) => {
    next(new ExpressError('Pagina não encontrada', 404))
})

app.use((err, req, res, next) => {
    console.log(err)
    const {statusCode = 500, message = "Algo deu errado"} = err
    res.status(statusCode).render('campos/error.ejs', {statusCode, message })
})

app.listen(3000, () => {
    console.log("ligado no port 3000")
}) 