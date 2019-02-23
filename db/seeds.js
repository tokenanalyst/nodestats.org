// const mongoose = require('mongoose');
// const { dbURI } = require('../config/environment');
// const Stats = require('../models/stats');
//
// const statsData = [{
//   name: 'Grant',
//   testNumber: 4
// }, {
//   name: 'Jai',
//   testNumber: 7
// }, {
//   name: 'Sid',
//   testNumber: 8
// }]
//
// mongoose.connect(dbURI);
// Stats.collection.drop();
//
//
// Stats.create(statsData)
//   .then(stats => {
//     console.log(`${stats.length} people created`);
//   })
//
//   .catch(err => console.log(err));
