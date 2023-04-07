const express = require('express');
const app = express();

const models = require('../models/index.js');

const routes = require('./routes');

const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/api', routes);
app.use(express.static('src/public'));

models.sequelize.sync()
    .then(() => {
        console.log('Connected to db...');
    })
    .catch(err => {
        console.log('Unable to connect to database: ', err);
    });

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));