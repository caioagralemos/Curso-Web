// node -i -e "$(< schema.js)"

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopDB')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        // required força que exista um nome para criar um produto, e força que o nome seja uma string
        required: true,
        uppercase: true,
        maxlength: 20,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        min: [1, "Não existe almoço grátis!"]
        // validation errors, array com o parâmetro e uma string que vai ser mostrada caso o parâmetro seja contrariado
        // max: 123000
    },
    available:{
        type: Boolean,
        // atribui um valor default para se nada for passado
        default: false
    },
    categories: {
        type: [String],
        default: ["Diversos"]
    },
    quantity: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size:{
        type: String,
        enum: ["P", 'M', 'G']
        // size vai precisar ser P M ou G
    }
})

const Product = mongoose.model("Produto", productSchema)

const bicicleta = new Product({name: 'Caloi 5300k Trilha', price: 599, categories: ["Ciclismo", "Esportes"], quantity: {online: 4, inStore: 44}, size: 'G'})
//bicicleta.save().then(data => console.log(data)).catch(err => console.log(err))

Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -9}, { runValidators: true })
// runValidators faz com que ele reconheça os parametros passados no modelo

Product.updateMany({$or: [{"quantity.online": {$gt: 1}}, {"quantity.inStore": {$gt: 1}}]}, {available: true}).then(res => console.log(res))
// faz com que todos que quantidade, seja online ou em loja, seja maior que zero, disponiveis