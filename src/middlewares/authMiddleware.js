const  jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {

    let token = req.cookies['auth'];
    console.log(req.cookies)
    console.log(token + 'this is token');

    if(token){
        //we have to validate token
        try{
            const user = await jwt.verify(token, SECRET);
            req.user = user;
            next();
        } catch(err){
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    } else {
        next();
    }
};