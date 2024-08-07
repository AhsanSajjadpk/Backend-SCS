const express = require('express')
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})




app.post('/register', async (req, res) => {

    let { name, username, email, password, age } = req.body
    let user = await userModel.findOne({ email })
    if (user) return res.status(500).send("User Already Registered")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {

            let user = await userModel.create({
                name, username, age, email,
                password: hash
            })
            let token = jwt.sign({email : email , userid : user._id}, "secretekry")
            res.cookie("token", token) 
            res.send("User Created .")
        })
    })
})


















app.listen(port = 3000, () => {
    console.log('Server is running on port ', port)
})