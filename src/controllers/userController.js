let router = require('express').Router();

const { MongooseError, Error } = require('mongoose');
const userManager = require('../managers/userManager');
const { extractErrorMessage } = require('../utils/errorHelpers');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword} = req.body;

    try{
        await userManager.register({username, password, repeatPassword});
        res.redirect('/users/login');
    } catch(error){
        const errorMessages = extractErrorMessage(error);
        res.status(404).render('users/register', { errorMessages });

    //    if(error instanceof MongooseError){
    //         return Object.values(error.errors).map( x => x.message);
    //    } else if(error){
    //         return [error.message];
    //    }

        //display just first error message
        // const firstErrorMessage = Object.values(err.errors)[0].message;
        // res.status(400).render('users/register', { errorMessage: firstErrorMessage });

        //display all error messages
        // const firstErrorMessage = Object.values(err.errors).map( x => x.message);
        // res.status(400).render('users/register', { errorMessage: firstErrorMessage });
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

router.post('/login', async (req, res, next) => {
    const { username, password} = req.body;

    try{
        const token = await userManager.login(username, password);

        res.cookie('auth', token, { httpOnly: true});

        res.redirect('/');
    } catch(error){
        next(error);
    }
});

module.exports = router;