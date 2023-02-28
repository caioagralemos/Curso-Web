// node -i -e "$(< middleware.js)"

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

// .pre vai fazer algo antes de executar
userSchema.pre('save', async function() {
    console.log("About to save!")
})

// .post faz algo depois de que o método passado por parâmetro é executado
userSchema.post('save', async function() {
    console.log("Just saved!")
})

const User = mongoose.model('Usuários', userSchema)

const claudia = new User({firstName: "Claudia", lastName: "dos Anjos"})