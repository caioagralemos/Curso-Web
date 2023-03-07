mongoose = require('mongoose')
passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

userSchema.plugin(passportLocalMongoose) // traz username e password já com hash e salt

module.exports = mongoose.model('User', userSchema)