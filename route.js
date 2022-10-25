const express = require('express')
const auth = require('./auth')

const route = express.Router()

route.get('/', (req, res) => {
    res.send('home route')
})

route.use('/auth', auth)
module.exports = route