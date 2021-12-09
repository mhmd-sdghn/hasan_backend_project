const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: String,
    password: String
} , { timestamps: true , toJson: { virtual: true }})


module.exports = mongoose.model('user' , User);