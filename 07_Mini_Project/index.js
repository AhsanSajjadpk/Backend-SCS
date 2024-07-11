// npm init
// npm i express
// npm i ejs

const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const { log } = require('console');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {

    fs.readdir('./files', function (err, files) {
        if (err) throw err
        else {
            res.render('index',{ files: files });
        }
    })
    
})

app.get('/file/:filename', function (req, res) {

    fs.readFile(`./files/${req.params.filename}`,'utf-8',function(err,filedata){
        res.render('data',{filename : req.params.filename.split('.')  ,data: filedata });
    })

})

app.get('/delete/:filename', function (req, res) {

    fs.rm(`./files/${req.params.filename}`,function(err){
        if(err) throw err
        else{
            res.redirect('/')
        }
    })

})

app.post('/create', function (req, res) {
  
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
res.redirect('/');
})

})

app.listen(3000, function () {
    console.log('Server is running on port 3000..');
});