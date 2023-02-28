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
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: [1, "Não existe almoço grátis!"]
    },
    available: {
        type: Boolean,
        default: false
    }
})

productSchema.methods.sale = function(newPrice) {
    console.log(`PROMOÇÃO!! ${this.name.toUpperCase()} POR APENAS ${newPrice} REAIS!`)
    Product.findOneAndUpdate({name: `${this.name}`}, {name: `${this.name} - promoção`, price: newPrice}, { runValidators: true }).then(res => console.log(res))
}

productSchema.methods.availability = function() {
    this.available = !this.available
    this.save()
}

// .methods - metodos de instância
// .static - metodos estáticos, atuam sobre o modelo

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model("produtoSimplificado.metodos", productSchema)

// Product.fireSale().then(res => console.log(res))

const sanduba1 = new Product({name: 'Quarteirão', price: 15})
const sanduba2 = new Product({name: 'Big Mac', price: 17})
const sanduba3 = new Product({name: 'Cheeseburger', price: 10})
const sanduba4 = new Product({name: 'Cheddar', price: 15})