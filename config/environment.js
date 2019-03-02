var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

var port = 4000;

module.exports = { port, app };
