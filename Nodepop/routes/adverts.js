var express = require('express');
var router = express.Router();

/* GET all adverts. */
router.post('/adverts', function(req, res, next) {
  res.send('Advert added succesfully!');
});

module.exports = router;
