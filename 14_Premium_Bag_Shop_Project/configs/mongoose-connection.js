const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/BagShopDB")
    .then(() => {
        console.log("\nConnected to MongoDB.....\n")
    })
    .catch((err) => {

        console.log("ERROR : ", err.message)

    })

module.exports = mongoose.connection;