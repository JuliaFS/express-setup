const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = 5000;

//express config (inpolzvame middlewear za statichnite failove)
app.use(express.static(path.resolve(__dirname, 'public')));


// //Handlebrs configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');  //nastroiva se, zashtoto direktoriqta e razlichna ot defaultnata

//Routes
app.get('/', (req, res) => {
    //res.send('Hello..............!!!!!!!!')
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));