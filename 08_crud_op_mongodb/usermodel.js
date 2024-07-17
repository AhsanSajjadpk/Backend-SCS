const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/myFirstDB`);

const userSchema = mongoose.Schema({

    name : String,
    username : String,
    email : String

})
const userModal = mongoose.model('user',userSchema);
module.exports =  userModal;

