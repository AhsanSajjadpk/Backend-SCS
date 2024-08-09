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

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/profile', isLoggedIn, (req, res) => {
    console.log(req.user)
    res.render('profile')
})
app.get('/logout', (req, res) => {
    res.cookie("token", "")
    res.redirect("/")
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
            let token = jwt.sign({ email: email, userid: user._id }, "secretekry")
            res.cookie("token", token)
            res.send("User Created .")
        })
    })
})


app.post('/login', async (req, res) => {

    let { email, password } = req.body
    let user = await userModel.findOne({ email })
    if (!user) return res.status(500).send("Something went wrong")

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "secretekry")
            res.cookie("token", token)
            res.send("you can login")
        }
        else {
            res.redirect("/login")
        }
    })
})



function isLoggedIn(req, res, next) {

    if (req.cookies.token === "") {
        console.log(req.cookies)
        res.send("You must be logged in")
    }
    else {
        let data = jwt.verify(req.cookies.token, "secretekry") // data ma email aur userid ayaga jo ham na jwt ma signn kea tha
        req.user = data
        next()
    }

}













app.listen(port = 3000, () => {
    console.log('Server is running on port ', port)
})