const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("All shelters")
})

router.get('/new', (req, res) => {
    res.send("create shelter")
})

router.post('/', (req, res) => {
    res.send("creating shelter")
})

router.get('/:id', (req, res) => {
    res.send("view one shelter")
})

router.get('/:id/edit', (req, res) => {
    res.send("editing shelter")
})

module.exports = router