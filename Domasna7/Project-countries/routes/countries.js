var express = require('express');
var router = express.Router();

const countries = [];

router
      .get('/', (req, res) => {
        res.render('countries/index', { countries: countries })
      })
      .get('/popis', (req, res) => {
        res.render('countries/popis');
      })
      .post('/', (req, res) => {
        countries.push(req.body);

        res.redirect('/countries');
      })

module.exports = router;