const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.get('/', function (req, res) {
    res.render('index')
})


app.post('/create',  function (req, res) {
    let { username, email, password, age } = req.body

    bcrypt.genSalt(saltRounds=10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            
            const createdUser = await userModel.create({
                username,
                email,
                password : hash,
                age
            })
        
          let token =  jwt.sign({email}, "secretkey")
          res.cookie("token",token)
            res.send(createdUser)

        });
        
    });

  
})

app.listen(3000)