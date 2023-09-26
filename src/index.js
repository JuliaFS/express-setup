const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController); //izpolzvame go kato middlewear

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));