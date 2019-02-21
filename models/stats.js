const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
  name: String,
})

const statsModel = mongoose.model('Stats', statsSchema);
module.exports = statsModel;
