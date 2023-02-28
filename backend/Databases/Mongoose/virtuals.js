// node -i -e "$(< virtuals.js)"

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})  

userSchema.virtual('fullName').set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
})

const User = mongoose.model('Usuários', userSchema)

const claudia = new User({firstName: "Claudia", lastName: "dos Anjos"})

claudia.fullName