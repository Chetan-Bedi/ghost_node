const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./route')
const app = express()
app.use(bodyParser.json())

require('./db/config');
app.use('/', routers)
app.listen('3030')