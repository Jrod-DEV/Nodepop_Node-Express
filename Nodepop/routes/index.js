const express = require('express');
const router = express.Router();

const Advert = require('../models/Advert');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const arrayAdvertsDB = await Advert.find();
    console.log(arrayAdvertsDB);

    res.render('index', {
      arrayAdvertsDB: arrayAdvertsDB,
      title: 'Nodepop',
      description: 'List of all ads stored in the API database.',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
