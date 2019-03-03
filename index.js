// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const router = require('./config/router');
// const { port, dbURI } = require('./config/environment');
// const errorHandler = require('./lib/errorHandler');
//
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect(dbURI);
//
// app.use(express.static(`${__dirname}/public`));
//
// app.use(bodyParser.json());
// app.use(morgan('dev'));
//
// app.use('/api', router);
//
// app.use(errorHandler);
//
// app.listen(port, () => console.log(`Up and running on port ${port}`));
//
// module.exports = app;
const express = require('express');
// Import the library:

const app = express();
const bodyParser = require('body-parser');
const router = require('./config/router');
const morgan = require('morgan');
const { port } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

app.listen(port, () => console.log(`Up and running on port ${port}`));

module.exports = app;
