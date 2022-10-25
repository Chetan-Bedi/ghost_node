const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    created_at: {
        type: Date,
    }
})

module.exports = mongoose.model('user', userSchema)