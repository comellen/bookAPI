require('dotenv').config();

const express = require('express');
const app = express();

const book = require('./controllers/bookcontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/books', book);

app.listen(3000, () => console.log('!@#$%^&^%$#@!    APP LISTENING ON 3000   !@#$%^&^%$#@!'));