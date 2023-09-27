const uniqid = require('uniqid');
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

exports.getAll = () => cubes.slice(); //vrashtame now masiv, a ne referenciq kam nego

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

//exports.create = (name, description, difficultyLevel, imageUrl);
exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);
    return newCube;
}