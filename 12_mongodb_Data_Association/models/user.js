const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dataAssociation')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel