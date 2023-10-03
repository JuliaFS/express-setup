const mongoose = require('mongoose');

const accessoryScema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
});

const Accessory = mongoose.model('Accessory', accessoryScema);

module.exports = Accessory;