let express = require("express")
const app = express()

app.listen(3000, () => {
    // abre o servidor na porta passada por parâmetro
    console.log("listening in localhost:3000")
})


app.get("/", (req,res) => {
    // localhost:3000
    console.log("a request was made!")
    console.dir(req)
    // req = request, res = response
    res.send("This is the home page! Pick your favorite, Cat or Dog!")
})

app.get("/dog", (req,res) => {
    // localhost:3000/dog
    console.log("a request was made!")
    console.dir(req)
    // req = request, res = response
    res.send({
        // res.send devolve uma resposta 
        // res.send é versátil e pode devolver diversos tipos de data além do JSON
        "name": "Luke",
        "lastname": "Lemos",
        "gender": "Male",
        "age":6
    })
})

app.post("/dog", (req, res) => {
    res.send("POST REQUEST TO LOCALHOST/DOG!")
})

app.get("/cat", (req,res) => {
    // localhost:3000/cat
    console.log("a request was made!")
    console.dir(req)
    // req = request, res = response
    res.send({
        // res.send devolve uma resposta 
        // res.send é versátil e pode devolver diversos tipos de data além do JSON
        "name": "Mia",
        "lastname": "Alencar",
        "gender": "Female",
        "age": 6
    })
})

app.get("*", (req,res) => {
    // asterisco vai trabalhar com todas as rotas não definidas
    // PRECISA SER DEFINIDO POR ÚLTIMO OU VAI SOBRESCREVER OS OUTROS
    res.send("I don't know this route. Try again")
})