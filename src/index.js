const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

const PORT = 5000;

// //express config (inpolzvame middlewear za statichnite failove)
// //app.use(express.static('src/public)'));                   //bi trqbvalo da raboti i taka, pri lektora se poluchi, pri men - ne
// app.use(express.static(path.resolve(__dirname, 'public'))); //taka zadavame absoliuten pat
//require('./config/expressConfig')(app); //vtori nachin za podavane na express konfiguraciq
expressConfig(app);
handlebarsConfig(app);

// // //Handlebrs configuration
// app.engine('hbs', handlebars.engine({
//     extname: 'hbs',
// }));
// app.set('view engine', 'hbs');
// //app.set('views', 'src/views');                              //nastroiva se, zashtoto direktoriqta e razlichna ot defaultnata
// app.set('views', path.resolve(__dirname, 'views'));

//Routes
app.get('/', (req, res) => {
    //res.send('Hello..............!!!!!!!!')
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));