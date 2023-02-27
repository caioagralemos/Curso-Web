// node -i -e "$(< index.js)"

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

// esquema é como a forma de bolo dos dados de um banco de dados
// funciona assim como uma classe
let Schema = mongoose.Schema

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
    isAvailable: Boolean
})

// cria uma coleção em nosso banco de dados
// model(nome do tipo que você quer criar, esquema)
const Filme = mongoose.model("Filme", movieSchema)

// === INSERINDO ===

const ultimato = new Filme({title: "Vingadores: Ultimato", year: 2019, score: 9, rating: "12", isAvailable: false})
// ultimato.save() - salva o filme no banco de dados, sem isso é só um JSON.

ultimato.score = 9.2

// Filme.insertMany([
//     // outro jeito de inserir dados no BD é usar comandos que seriam diretamente
//     // utilizados no mongosh, nesse caso inserindo muitas coisas de uma vez
//     {
//         title: "O Cavaleiro das Trevas",
//         year: 2008,
//         score: 9.0,
//         rating: "18",
//         isAvailable: true
//     },
      
//     {
//         title: "A Origem",
//         year: 2010,
//         score: 8.8,
//         rating: "16",
//         isAvailable: true
//     },
      
//     {
//         title: "Um Sonho de Liberdade",
//         year: 1994,
//         score: 9.3,
//         rating: "12",
//         isAvailable: false
//     },
      
//     {
//         title: "O Poderoso Chefão",
//         year: 1972,
//         score: 9.2,
//         rating: "18",
//         isAvailable: true
//     },
      
//     {
//         title: "Pulp Fiction",
//         year: 1994,
//         score: 8.9,
//         rating: "12",
//         isAvailable: false
//     }
      
// ])

// === FINDING ===
// só usar os comandos que já se usavam no mongosh normal
Filme.find({rating: {$gte: 9}})
Filme.findOne({year: 1972, score: 9.2}).then(m => console.log(m))

// === UPDATING ===
// updateOne.({alguma info sobre o filme que se quer alterar}, {alteração})
Filme.updateOne({title: "Vingadores: Ultimato"}, {isAvailable: true}).then(res => console.log(res))
Filme.updateMany({title: {$in: ['A Origem', 'O Poderoso Chefão']}}, {isAvailable: false}).then(res => console.log(res))

// === DELETING ===
Filme.findOneAndDelete({year: 1972, score: 9.2}).then(m => console.log(m))