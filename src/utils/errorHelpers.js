const { MongooseError } = require('mongoose');

exports.extractErrorMessage = (error) => {
    if(error instanceof MongooseError){
        return Object.values(error.errors).map( x => x.message);
    } else if(error){
        return [error.message];
    }
    // switch(typeof error){
    //     case 'ValidationError':
    //         return Object.values(err.errors).map( x => x.message);
    //     default: 
    //         return [err.message];
    // }
}