const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if (req.query.isAdmin){
        next()
    }
    res.send('NOT AN ADMIN!')
})


router.get('/topsecret', (req, res) => {
    res.send("THIS IS TOP SECRET")
})

router.get('/deleteeverything', (req, res) => {
    res.send("ok deleted it all")
})

module.exports = router