express = require("express")
app = express()

// decoda a url como variáveis em req.body
app.use(express.urlencoded({ extended: true}))
// app.use(express.json()) prepara pra decodar um json em req.body no caso em que um json é passado no post

app.get("/tacos", (req, res) => {
    res.send("GET /tacos")
})

app.post("/tacos", (req, res) => {
    const { flavor, qty } = req.body
    res.send(`Your order was set to ${qty} ${flavor} tacos!`)
})


app.listen(3000, () => {
    console.log("on port 3000")
})
