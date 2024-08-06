const app = require('express')();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/create', async (req, res) => {

    let createdUser = await userModel.create({
        username: "ahsansajjadpk",
        email: "ahsan@gmail.co",
        age: 21,

    })
    res.send(createdUser)
})


app.get('/post/create', async (req, res) => {

    let postCreated = await postModel.create({
        data: "This is post data 1",
        user: "66b205471ad7049a03db393a",

    })
    let user = await userModel.findOne({_id : "66b205471ad7049a03db393a"})

    user.posts.push(postCreated._id)
    await user.save()
    res.send({postCreated, user})  
})










app.listen(3000, function () {
    console.log("Server is running..");

})