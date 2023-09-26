const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

//path is /cubes/create
router.get('/create', (req, res) => {
    //console.log(cubeManager.getAll());
    res.render('create');
})

router.post('/create', (req, res) => {
    const {name, description, difficultyLevel, imageUrl } = req.body;
    cubeManager.create({
        name, 
        description, 
        difficultyLevel: Number(difficultyLevel), 
        imageUrl });
    res.redirect('/');
})

module.exports = router;