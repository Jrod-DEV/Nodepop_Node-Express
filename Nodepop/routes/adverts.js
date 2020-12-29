var express = require('express');
var router = express.Router();

/* GET all adverts. */
router.get('/adverts', function(req, res, next) {
  res.render('adverts', {title : 'Adverts'});
});

module.exports = router;
