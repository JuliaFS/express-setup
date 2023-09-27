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

router.get('/:cubeId/details', (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId);

    res.render('details', { cube });
});

module.exports = router;