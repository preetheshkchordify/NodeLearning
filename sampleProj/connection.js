const mongoose = require('mongoose');


async function dbConnection() {
    console.log("Mongoose Connected")
    return mongoose.connect("mongodb://localhost:27017/test")
}

module.exports = {
    dbConnection
}