var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const jwt = require('express-jwt');
require('dotenv').config();


router
      .post('/register', controller.register)
      .post('/login', controller.login)
      .post('/logout', controller.logout)
      .get('/:id',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.MyProfile)
      

module.exports = router;
