const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./usermodel');





app.get('/', function (req, res) {
res.send(" hello worldds")
})


app.get('/create',  async (req, res) => {
   
    let userCreated = await userModel.create({
        name: 'Ahsan Sajjad',
        username : 'ahsansajjad5'
    })
    res.send(userCreated)

})

app.get('/read', async function (req, res) {

    let users = await userModel.find( ) //{ username : 'ahsansajjad5'}
    res.send(users)

})

app.get('/update', async function (req, res) {
   
   let updatedUser =  await userModel.findOneAndUpdate({name: 'sandeep singh'}, {name: 'sandi'},{new : true})
res.send(updatedUser)

})

app.get('/delete',async function (req, res) {
    let deletededUser =  await userModel.findOneAndDelete( {name: 'sandeep'})
res.send(deletededUser) 

})
    
    


app.listen(3000, function () {
    console.log('Server is running on port 3000..');
});