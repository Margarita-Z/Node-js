var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

router
.post('/', controller.postRegistering)
.post('/', controller.postLoging) ;


module.exports = router;
