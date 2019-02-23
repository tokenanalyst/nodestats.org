const router = require('express').Router();
const stats = require('../controllers/stats');

router.route('/nodestats')
  .get(stats.index)

module.exports = router;
