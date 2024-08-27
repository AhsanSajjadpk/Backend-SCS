const express = require("express")
const Router = express.Router();

Router.get("/",()=>{
    console.log("Hello World");
})

module.exports = Router;