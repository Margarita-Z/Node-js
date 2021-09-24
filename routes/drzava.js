var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('drzava', {  country: ['Makedonija','Slovenija','Rusija','Germanija' ]});
});

module.exports = router;