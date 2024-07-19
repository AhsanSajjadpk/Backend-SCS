const express = require('express');
const app = express();
const path = require('path')
const userModal = require('./models/user')

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/read', async (req, res) => {

    let everyUsers = await userModal.find();
    res.render('read', { users: everyUsers });
})

app.get('/delete/:id', async (req, res) => {

    let deletedUser = await userModal.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read');
})

app.get('/edit/:id', async (req, res) => {

    let updatedUser = await userModal.findOne({ _id: req.params.id });
    res.render('edit', { user: updatedUser });
})



app.post('/create', async (req, res) => {

    let { name, email, image } = req.body;
    const createdUser = await userModal.create({

        name: name,
        email: email,
        image: image
    })
    res.redirect('/read')

})
app.post('/update/:id', async (req, res) => {

    let { uname, uemail, uimage } = req.body;
    const updatedUser = await userModal.findOneAndUpdate(

        { 
            _id: req.params.id 

        },
        {
            name : uname,
            email : uemail,
            image : uimage
        },
        {
            new: true
        })
    res.redirect('/read')

})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})