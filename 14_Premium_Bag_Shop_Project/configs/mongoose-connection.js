const mongoose = require('mongoose')
const config = require('config')
const dbgr = require('debug')("development:mongoose")
// set DEBUG=development*  --- when see log values
// set DEBUG=               --- when hide log values

mongoose.connect(`${config.get("MONGODB_URI")}/BagShopDB`)
    .then(() => {
        dbgr("\nConnected to MongoDB.....\n")
    })
    .catch((err) => {

        dbgr("ERROR : ", err.message)

    })

module.exports = mongoose.connection;