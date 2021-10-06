var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id',controller.postUpdate)
      .delete('/',controller.delete)

module.exports = router;