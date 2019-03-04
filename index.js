
const express = require('express');
// Import the library:
const app = express();
const router = require('./config/router');
const { port } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.use('/api', router);

app.listen(port, () => console.log(`Up and running on port ${port}`));

module.exports = app;
