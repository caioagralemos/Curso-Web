const mongoose = require('mongoose')
const Review = require('./review')
const Schema = mongoose.Schema

const campoSchema = new Schema ({
    titulo: String,
    imagem: String,
    preco: Number,
    descricao: String,
    local: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

campoSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campo', campoSchema)