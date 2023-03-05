const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dataRel')
.then(() =>{
    console.log("it worked!")
})
.catch(err => {
    console.log(err)
})

// ##### ONE TO BAZILIONS #####
// referenciando usuário no id

const userSchema = new mongoose.Schema ({
    username: String,
    age: Number
})

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    // o tipo do que será referenciado (id de objeto), e o que será referenciado (objeto: Product)
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

const makeTweets = async (user) => {
   const u = await User.findOne({username: user})
   const tweet2 = new Tweet ({text: "Drugo ftw", likes: 123})
   tweet2.user = u
   tweet2.save()

} 

// makeTweets("caioagralemos")

const findTweet = async() => {
    // printa um tweet com apenas o usuario do user populado
    const t = await Tweet.find({}).populate('user', 'username')
    console.log(t)
}

findTweet()