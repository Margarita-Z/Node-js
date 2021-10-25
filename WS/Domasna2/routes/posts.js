var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');

router
    .post('/', controller.create)
    .get('/', controller.returnAll)
    .get('/:id', controller.returnOne)
    .get('/users/:id', controller.getByUser)
    .delete('/:id', controller.delete)


module.exports = router;