// RESTful Paths

// INDEX PATH
// GET /comments - list all commands

// CREATE PATH
// POST /comments - create a new comment

// SHOW PATH
// GET /comments/:id - get a single comment using id

// UPDATE PATH
// PATCH /comments/:id - update a single comment

// DESTROY PATH
// DELETE /commentd/:id - delete one comment

const express = require("express")
const app = express()
const path = require("path")
const { v4:uuid } = require("uuid")
const methodOverride = require("method-override")

// decoda a url como variáveis em req.body
// app.use(express.json()) prepara pra decodar um json em req.body no caso em que um json é passado no post
app.use(express.urlencoded({ extended: true}))
app.set("view engine", "ejs") // request e ja define ejs como nossa engine
app.set("views", path.join(__dirname, "/views"))
app.use(methodOverride("_method"))

let comments = [
    {
        id: uuid(),
        username: "toddyinho",
        text: "LOL so funny"
    },
    {
        id: uuid(),
        username: "pixarfun",
        text: "His face!"
    },
    {
        id: uuid(),
        username: "blast0ise",
        text: "To heaven and back in two secs haha"
    },
    {
        id: uuid(),
        username: "teksmastt3r",
        text: "Is this what people consider funny now-a-days?"
    },
    {
        id: uuid(),
        username: "breakingbadfan",
        text: "HAHAHA fy"
    }
]

app.get("/comments", (req,res) => {
    // INDEX PATH
    res.render("allcomments.ejs", { comments })
})

app.get("/comments/new", (req,res) => {
    // NEW PATH
    res.render("new.ejs")
})

app.post("/comments", (req, res) => {
    // CREATE PATH
    const {username, text} = req.body 
        // aqui é sempre REQ, pois o que chega é a requisição
    comments.push({username, text, id: uuid()})
    res.redirect("/comments")
        // redirect, após o fim da requisição, manda um get para /comments, jogando o usuário de volta
})

app.get("/comments/:id", (req,res) => {
    // SHOW PATH
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render("show.ejs", { id, comment })
})

app.get("/comments/:id/edit", (req,res) => {
    // EDIT PATH
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render("edit.ejs", { comment })
})

app.patch("/comments/:id", (req,res) => {
    // UPDATE PATH
    const {id} = req.params
    const newComment = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.text = newComment
    res.redirect("/comments")

})

app.delete("/comments/:id", (req,res) => {
    // DESTROY PATH
    const {id} = req.params
    comments = comments.filter(c => c.id !== id)
    console.log("deleted successfully")
    res.redirect("/comments")
})



// ### funcionamento do express ###

app.get("/", (req, res) => {
    res.render("allcomments.ejs", { comments })
})

app.listen(3000, () => {
    console.log("on port 3000")
})
