var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const { query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function (req, res) {
  const second = new Date().getSeconds(); // segundo actual

  //   res.locals.valor = '<script>alert("Inyección de código")</script>'

  res.locals.condition = {
    second: second,
    state: second % 2 === 0,
  };

  res.locals.adverts = [
    {
      id: '_id73094758340',
      name: 'Iphone X',
      onsale: true,
      price: 950,
      tags: ['mobile'],
    },
    {
      id: '_id73094756566',
      name: 'Laptop',
      onsale: false,
      price: 1300,
      tags: ['work, lifestyle'],
    },
    {
      id: '_id734358745782',
      name: 'Snowboard',
      onsale: true,
      price: 200,
      tags: ['sport, lifestyle'],
    },
  ];

  res.render('index', { title: 'Nodepop' });
});

router.get('/id/:tag', (req, res) => {
  console.log(req.params);
  res.send('OK');
});

router.get('/paramenrutaopcional/:price?', (req, res) => {
  console.log(req.params);
  res.send('Price');
});

router.get(
  '/params/:id/name/:name/onsale/:onsale/price/:price[0-9]/tags/:tags',
  (req, res) => {
    // http://localhost:3000/params/234234/name/iphone/buy/true/price/1250/tags/mobile
    console.log(req.params);
    res.send('Item with params filter');
  }
);

// Collect parameters in query string and use of express-validator
router.get(
  '/querystring',
  [
    // Validations
    query('name').isAlpha().withMessage('must be text'),
    query('price').isNumeric().withMessage('must be a number'),
    query('tag').isAlpha().withMessage('must be text'),
    query('buy').isBoolean().withMessage('must be true or false'),
  ],
  (req, res) => {
    validationResult(req).throw(); //lanza una expeción si hay errores de validación
    console.log(req.query);
    // http://localhost:3000/querystring?id=29847923&name=iphone&price=579&tag=mobile&buy=true
    // http://localhost:3000/querystring?color=rojo&talla=L&almacen=jaen
    res.send('Ok');
  }
);

// Collect data from the body "POST"
router.post('/enelbody', (req, res, next) => {
  console.log(req.body);
  if (req.body.color !== 'rojo') {
    next(createError(422, 'Color no admitido, solo funciona con el rojo'));
    // http://localhost:3000/querystring?color=rojo&talla=L&almacen=jaen
     return;
  }
  res.send('Ok');
});

module.exports = router;
