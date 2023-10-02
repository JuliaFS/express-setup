const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const { search } = require('../controllers/homeController');
//const db = require('../db.json');
const cubes = [
    {
        id: 'sasdf234',
        name: 'Mirror cube 1',
        description: 'Mirror cube description',
        imageUrl: 'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        difficultyLevel: 4
    },
    {
        id: 'sasdf2344e',
        name: 'Mirror cube 2',
        description: 'Mirror cube 2 description',
        imageUrl: 'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        difficultyLevel: 4
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice(); //vrashtame now masiv, a ne referenciq kam nego

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
exports.getOne = (cubeId) => Cube.findById(cubeId).lean();

//exports.create = (name, description, difficultyLevel, imageUrl);
exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);
    await cube.save();

    return cube;
}