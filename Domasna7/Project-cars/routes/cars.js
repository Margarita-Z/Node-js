var express = require('express');
var router = express.Router();

const cars = [];

router
      .get('/', (req, res) => {
        res.render('cars/index', { cars: cars })
      })
      .get('/search', (req, res) => {
        res.render('cars/search');
      })
      .post('/', (req, res) => {
        cars.push(req.body);

        res.redirect('/cars');
      })

module.exports = router;