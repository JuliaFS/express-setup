exports.extractErrorMessage = (error) => {
    switch(typeof error){
        case 'ValidationError':
            return Object.values(err.errors).map( x => x.message);
        default: 
            return [err.message];
    }
}