const Stats = require('../models/stats');

function indexRoute(req, res, next) {
  Stats.find()
    .then(stats => res.json(stats))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
