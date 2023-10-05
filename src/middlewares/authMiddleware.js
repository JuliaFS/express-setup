const  jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {

    let token = req.cookies['auth'];

    if(token){
        //we have to validate token
        try{
            const decodedUser = await jwt.verify(token, SECRET);
            req.user = decodedUser; //locals jiveqt samo v ramkite na request response cikala
            res.locals.user = decodedUser;
            res.locals.isAuthenticated = true; //taka sazdavame promenliva vidima i dostapna samo za render
            next();
        } catch(err){
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    } else {
        next();
    }
};

exports.isAuthenticated = (req, res) => {
    if(!req.user){
        res.redirect('/users/login');
    }
    next();
};