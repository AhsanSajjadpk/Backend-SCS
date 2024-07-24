// npm i jsonwebtoken bcrpyt
// npm i cookie-parser

const bcrypt = require('bcrypt'); // use for encryption and decryption -> npmjs.com
const cookieParser = require('cookie-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()

app.use(cookieParser())

//----------------------------------------------------------
const saltRounds = 10;
const myPlaintextPassword = 'Ahsan';
const hashe = '$2b$10$XR//sMYs82VP8EJh3I2ojOArgADJSZ/cEqWcvPEIDTOb/J5pN1XgS';

//----------------------------------------------------------

app.get('/', (req, res) => {
    res.cookie("name", "Ahsan")
    res.send("Cookie Done.")
})

app.get('/read', (req, res) => {
    console.log(req.cookies)
    res.send("Cookie Read.")
})

app.get('/encrypt', (req, res) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            res.send("Encrypt Password")

            console.log(hash)
        });
    });
})
app.get('/decrypt', (req, res) => {
    bcrypt.compare(myPlaintextPassword, hashe, function(err, result) {
       
        res.send("decrypt Password")
            console.log(result)

    });
})

app.get('/jwt', (req, res) => {
    const token = jwt.sign({email : "sajjadahsan461@gmail.com"},"SecretStringAyaGiYahan")
    res.cookie("token" , token)
    console.log(token)
    res.send("Getting JWT String on console")


})
// app.get('/jwtget', (req, res) => {
   
//     let data = jwt.verify(req.cookies.token, "SecretStringAyaGiYahan")
//     console.log(data)
//     res.send("Getting JWT String on console getting")


// })

app.get('/jwtget', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).send("Token not provided");
    }

    try {
        const data = jwt.verify(token, "SecretStringAyaGiYahan");
        console.log(data);
        res.send("Token verified and data logged.");
    } catch (err) {
        res.status(401).send("Invalid token");
    }
});


app.listen(3000)