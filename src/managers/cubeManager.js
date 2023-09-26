const cubes = [];

exports.getAll = () => cubes.slice(); //vrashtame now masiv, a ne referenciq kam nego

//exports.create = (name, description, difficultyLevel, imageUrl);
exports.create = (cubeData) => {
    const newCube = {
        id: cubes.length + 1,
        ...cubeData
    };

    cubes.push(newCube);
    return newCube;
}