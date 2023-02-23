const express = require("express")
const app = express()
const path = require("path")
const redditData = require("./data.json")

// essa linha compartilha as caracteristicas da /public e as torna disponíveis para qualquer página como se estivesse no diretório
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs") // request e ja define ejs como nossa engine
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/dogs", (req, res) => {
    const dogs = ['Luke', 'Meg', 'Olaf', 'Amigo', 'Tekila', 'Britney', 'Pirulito']
    res.render("for", { dogs })
})

app.get("/r/:subreddit", (req,res) =>{
    const { subreddit } = req.params
    const data = redditData[subreddit]
    if (data) {
    // os ... antes de data espalham as propriedades do JSON (data.name vira name)
    res.render('compsubr', {subreddit, ...data})
    }
    else {
        res.render("notfound", {subreddit})
    }
})

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1)
    res.render("random", {rand: num})
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})