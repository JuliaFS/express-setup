const router = require('express').Router();

//path is /cubes/create
router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    res.redirect('/');
})

module.exports = router;