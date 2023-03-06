const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("All dogs")
})

router.get('/new', (req, res) => {
    res.send("create dog")
})

router.post('/', (req, res) => {
    res.send("creating dog")
})

router.get('/:id', (req, res) => {
    res.send("view one dog")
})

router.get('/:id/edit', (req, res) => {
    res.send("editing dog info")
})

module.exports = router