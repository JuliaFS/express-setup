const handlebars = require('express-handlebars');
const path = require('path');

function handlebarsConfig(app){
    // //Handlebrs configuration
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    //app.set('views', 'src/views');                              //nastroiva se, zashtoto direktoriqta e razlichna ot defaultnata
    app.set('views', path.resolve(__dirname, '../views'));
}

module.exports = handlebarsConfig;