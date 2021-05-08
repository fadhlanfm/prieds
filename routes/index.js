var express = require('express');
var router = express.Router();
var queuesRoutes = require('./queues')
var visitorRoutes = require('./visitors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/queues', queuesRoutes);
router.use('/visitors', visitorRoutes);

module.exports = router;
