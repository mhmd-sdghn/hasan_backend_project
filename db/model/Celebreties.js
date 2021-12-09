const mongoose = require('mongoose');

const Celebreties = new mongoose.Schema({
    title: String,
    image: String,
    face: String,
    birthday: String
} , { timestamps: true , toJson: { virtual: true }})


module.exports = mongoose.model('celebreties' , Celebreties);