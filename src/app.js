const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const repositoryRoute = require('./routes/repositoryRoute');

app.use('/', index);
app.use('/repositories', repositoryRoute);

module.exports = app;