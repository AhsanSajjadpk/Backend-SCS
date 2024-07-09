const express = require('express')
const app = express()
const path = require('path');



// Setting up parser for form | form ka data backend pr handle kr payan ga
// npm i cookie-parser

// app.use(express.json());
// app.use(express.urlencoded({ extended : true }))




// Setting up public static file
      // create public folder at root level
// app.use(express.static(__dirname+'public'));
//or
app.use(express.static(path.join(__dirname,'public')));



// setting up ejs file using --> npm i ejs
 app.set('view engine','ejs');



//-------------------------------------------------------------------
//  app.get('/stylesheets/style.css', (req, res) => {
//   res.type('text/css');
//   res.sendFile(path.join(__dirname, 'public/stylesheets/style.css'));
// });

// app.get('/javascripts/script.js', (req, res) => {
//   res.type('text/js');
//   res.sendFile(path.join(__dirname, 'public/javascripts/script.js'));
// });
//-------------------------------------------------------------------



// Routes
app.get('/', function (req, res) {
  res.render('index')
})
app.get('/profile', function (req, res) {
  res.send('This is Profile')
})
app.get('/profile/:username', function (req, res) {
  res.send(`Calling ${req.params.username}`)
})
app.get('/profile/:username/:age', function (req, res) {
  res.send(`Welcome, ${req.params.username} and Age : ${req.params.age}`)
})

app.listen(3000,function(){
  console.log("running")
})