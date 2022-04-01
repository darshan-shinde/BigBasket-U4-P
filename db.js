const mongoose = require('mongoose')

module.exports = () => {
    return mongoose.connect("mongodb+srv://bigbasket:bigbasket@cluster0.hcyfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}