const mongoose = require('mongoose')
mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp`) // isko configuartion files ma likhta hen


const userschema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
})

module.exports = mongoose.model('user', userschema)
