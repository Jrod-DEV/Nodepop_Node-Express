'use strict';

const express = require('express');
const router = express.Router();
const Agente = require('../../models/Advert');

/* Get /adverts */
router.get('/', async function (req, res, next) {
  try {
    const agentes = await Agente.find();
    res.json(agentes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
