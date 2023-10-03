const mongoose = require('mongoose');

const cubeShema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = mongoose.model('Cube', cubeShema);

module.exports = Cube;