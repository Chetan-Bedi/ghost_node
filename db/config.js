const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ghost_db', () => {
    console.log('db connect');
})