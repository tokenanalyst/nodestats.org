const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
  name: String,
  testNumber: Number
})

const statsModel = mongoose.model('Stats', statsSchema);
module.exports = statsModel;
