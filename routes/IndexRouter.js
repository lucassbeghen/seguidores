var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

router.get('/:login?',IndexController.showSeguidores);

module.exports = router;