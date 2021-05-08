var express = require('express');
var router = express.Router();
const queuesController = require('../controllers/queues');

router.post('/:counter?', queuesController.create);

module.exports = router;
