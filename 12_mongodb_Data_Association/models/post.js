const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    data: String,
    user: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    date: { type: Date, default: Date.now }

})

const userModel = mongoose.model('post', postSchema)
module.exports = userModel