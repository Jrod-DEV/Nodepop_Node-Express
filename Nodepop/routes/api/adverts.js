'use strict';

const express = require('express');
const router = express.Router();
const Advert = require('../../models/Advert');

/* Get /api/adverts */
router.get('/', async function (req, res, next) {
  try {
    const name = req.query.name;
    const onsale = req.query.onsale;
    const price = req.query.price;
    const tag = req.query.tag;

    const limit = parseInt(req.query.limit || 10);
    const skip = parseInt(req.query.skip);

    // Search filters
    const filter = {};

    if (name) {
      filter.name = name;
    }

    if (price) {
      filter.price = price;
    }

    if (tag) {
      filter.tags = tag;
    }

    if (onsale) {
      filter.onsale = onsale;
    }

    const adverts = await Advert.list(filter, limit, skip);
    res.json(adverts);
  } catch (err) {
    next(err);
  }
});

/* GET /api/adverts/<_id> */
router.get('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id;

    const advert = await Advert.findOne({ _id: _id });

    res.json({ result: advert });
  } catch (err) {
    next(err);
  }
});

// POST /api/adverts
router.post('/', async (req, res, next) => {
  try {
    const advertData = req.body;

    // We create document un memory
    const advert = new Advert(advertData);

    // We save the document in the database
    const advertSaved = await advert.save();

    res.json({ result: advertSaved });
  } catch (err) {
    next(err);
  }
});

/* PUT /api/addverts/:_id */
router.put('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id;
    const advertData = req.body;

    const advertSaved = await Advert.findOneAndUpdate(
      { _id: _id },
      advertData,
      { new: true, useFindAndModify: false }
    );
    res.json({ result: advertSaved });
  } catch (err) {
    next(err);
  }
});

/* DELETE /api/adverts/:_id */
router.delete('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id;

    await Advert.deleteOne({ _id: _id });

    res.send('Advert deleted succesfully!');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
