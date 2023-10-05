const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');


function expressConfig(app){
    //express config (inpolzvame middlewear za statichnite failove)
    //app.use(express.static('src/public)'));                   //bi trqbvalo da raboti i taka, pri lektora se poluchi, pri men - ne
    app.use(express.static(path.resolve(__dirname, '../public'))); //taka zadavame absoliuten pat
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfig;