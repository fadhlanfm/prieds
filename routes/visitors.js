var express = require('express');
var router = express.Router();
const visitorsController = require('../controllers/visitors');

router.post('/', visitorsController.add);
router.get('/', visitorsController.getAll);

module.exports = router;
