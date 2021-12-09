const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan')
const initDatabase = require('./db/index')


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(helmet());
app.enable('trust proxy');

initDatabase()


app.listen(4000 , (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('server is up and running');
    }
})