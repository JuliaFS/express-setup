const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig');

const app = express();

const PORT = 5000;

// //express config (inpolzvame middlewear za statichnite failove)
// //app.use(express.static('src/public)'));                   //bi trqbvalo da raboti i taka, pri lektora se poluchi, pri men - ne
// app.use(express.static(path.resolve(__dirname, 'public'))); //taka zadavame absoliuten pat
expressConfig(app);

// //Handlebrs configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
//app.set('views', 'src/views');                              //nastroiva se, zashtoto direktoriqta e razlichna ot defaultnata
app.set('views', path.resolve(__dirname, 'views'));

//Routes
app.get('/', (req, res) => {
    //res.send('Hello..............!!!!!!!!')
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));