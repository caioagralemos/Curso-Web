let express = require("express")
const app = express()

app.listen(8080, () => {
    // abre o servidor na porta passada por parâmetro
    console.log("listening in localhost:8080")
})

app.use((req, res) => {
    // executa esse código sempre que uma requisição é feita
    // não é compatível com routing pois quando usamos o .use todas as requisições terão a mesma resposta
    console.log("a request was made!")
    console.dir(req)
    // req = request, res = response
    res.send({
        // res.send devolve uma resposta 
        // res.send é versátil e pode devolver diversos tipos de data além do JSON
        "name": "Caio",
        "lastname": "Lemos",
        "course": "The Web Developer Bootcamp 2023",
        "age": 19
    })
})
