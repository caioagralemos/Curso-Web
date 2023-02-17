let express = require("express")
const app = express()

app.listen(4000, () => {
    // abre o servidor na porta passada por parâmetro
    console.log("listening in localhost:4000")
})

app.get("/", (req,res) => {
    res.send("This is your home page!")
})

app.get("/r/:subreddit", (req, res) => {
    // :param - como é definido um parâmetro aqui
    const { subreddit } = req.params
    res.send(`Browsing r/${subreddit}`)
})

app.get("/r/:subreddit/:postID", (req, res) => {
    // :param - como é definido um parâmetro aqui
    const { subreddit, postID } = req.params
    res.send(`Post ${postID} @ r/${subreddit}`)
})

app.get("/search", (req, res) => {
    // localhost:4000/search?q=
    const { q } = req.query
    if (!q) {
        // se não for passado nenhum parâmetro
        res.send("What can you found when you don't know what you are looking for? :!")
    }
    res.send(`You searched for ${q}`)
})


app.get("*", (req, res) => {
    res.send("404 Not Found - Perhaps you've did something wrong?")
})