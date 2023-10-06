const { extractErrorMessage } = require('../utils/errorHelpers');


//global error handler
module.exports = (err, req, res, next) => {
    const errorMessages = extractErrorMessage(err);
    res.render('404', { errorMessages });
}