var express = require('express');
var app = express();
var port = 4000;
var cors = require('cors');
app.use(cors());
module.exports = { port, app };
