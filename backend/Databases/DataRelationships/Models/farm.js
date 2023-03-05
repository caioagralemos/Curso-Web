const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dataRel')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

// ##### ONE TO MANY #####
// vinculando tabelas usando ids

const productSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'winter', 'fall'],
        lowercase: true
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    // o tipo do que será referenciado (id de objeto), e o que será referenciado (objeto: Product)
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     { name: 'Melon', price: 4.99, season: 'summer'},
//     { name: 'Grapes', price: 2.99, season: 'winter'},
//     { name: 'Banana', price: 1.99, season: 'fall'},
//     { name: 'Brazilian Mango', price: 7.99, season: 'spring'}
// ])


const makeFarm = async () => {
   const farm = new Farm ({ name: 'Full Belly Farms', city: 'Guinda, CA', })
   const melon = await Product.findOne({name:  'Melon'})
   farm.products.push(melon)
   farm.save()
   console.log(farm)
} 

const addProduct = async (farmname, productname) => {
    try {
    const farm = await Farm.findOne({name: farmname})
    const product = await Product.findOne({name:  productname})
    farm.products.push(product)
    await farm.save()
    console.log(farm)
    } catch (e) {
        console.log("algo deu errado:", e)
    }
}

// criando a fazenda
// makeFarm()

// adicionando os produtos na fazenda
// addProduct("Full Belly Farms", "Banana")
// addProduct("Full Belly Farms", "Grapes")

// transformando os ids em produtos através do método populate (retorna farm populada)
Farm.findOne({name: 'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm))
