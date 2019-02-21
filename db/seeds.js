const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Stats = require('../models/stats');

const statsData = [{
  name: 'Grant'
}, {
  name: 'Jai'
}, {
  name: 'Sid'
}]

mongoose.connect(dbURI);
Stats.collection.drop();


Stats.create(statsData)
  .then(stats => {
    console.log(`${stats.length} people created`);
  })

  .catch(err => console.log(err));
