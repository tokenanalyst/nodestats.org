// const Stats = require('../models/stats');
//
// function indexRoute(req, res, next) {
//   Stats.find()
//     .then(stats => res.json(stats))
//     .catch(next);
// }
//
// module.exports = {
//   index: indexRoute
// };

const Stats = require('../db/data');

function indexRoute(req, res, next) {
  res.json({Stats})
}

module.exports = {
  index: indexRoute
};
