const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const { search } = require('../controllers/homeController');
//const db = require('../db.json');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean(); 

    if(search){
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}

//exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);
exports.getOne = (cubeId) => Cube.findById(cubeId); //bi moglo tuk da e lean();

//exports.create = (name, description, difficultyLevel, imageUrl);
exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);
    await cube.save();

    return cube;
}