const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes');
// const homeController = require('./controllers/homeController');
// const cubeController = require('./controllers/cubeController');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB connected successfully...'))
    .catch(err => { console.log('DB error: ' + err);
});

app.use(routes);
// app.use(homeController); //izpolzvame go kato middlewear
// app.use('/cubes', cubeController);
// app.get('*', (req, res) => {
//     res.redirect('/404');
// })

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));