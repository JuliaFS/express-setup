const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../lib/jwt');

const { SECRET } = require('../config/config');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    //find user
    const user = await User.findOne({ username });

    if(!user){
        throw new Error('Cannot find username or password');
    }

    //validate password
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Cannot find username or password');
    }

    //set webtoken
    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

    //return user
    return token;
};