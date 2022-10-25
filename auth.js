const express = require('express')
const user = require('./db/user')
const authRoute = express.Router()


authRoute.post('/login', (req, res) => {

    const newUser = new user(req.body)
    newUser.save().then((result) => {
        res.status(200).json(result)
    })
    
})

module.exports = authRoute