const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dataRel')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

// ##### ONE TO FEW #####
// vinculando tabelas por direct inbed

const userSchema = new mongoose.Schema ({
    first: String,
    last: String,
    addresses: [
        {
            _id: false,
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const newU = new User({
        first: 'Harry',
        last: 'Potter'
    })
    newU.addresses.push({
        street: "Hogwarts St.",
        city: "Magicland",
        state: "HW",
        country: "UK"
    })
    const res = await newU.save()
}

const addAddress = async(id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: "1st St.",
        city: "New York",
        state: "NY",
        country: "US"
    })
    const res = await user.save()
    console.log(res)
}

// makeUser().then(() => {
//     mongoose.connection.close()
// })

addAddress("64035938dcc000c7165b6847")

