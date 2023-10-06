const { MongooseError } = require('mongoose');

exports.extractErrorMessage = (error) => {
    if(error instanceof MongooseError){
        console.log('Error is instance of Mongoose');
        return Object.values(error.errors).map( x => x.message);
    } else if(error){
        console.log('Error is in error: ' + error.message);
        return [error.message];
    }
    // switch(typeof error){
    //     case 'ValidationError':
    //         return Object.values(err.errors).map( x => x.message);
    //     default: 
    //         return [err.message];
    // }
}