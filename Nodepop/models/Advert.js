'use strict';

const mongoose = require('mongoose');

// Schema
const advertSchema = mongoose.Schema({
  name: { type: String, index: true },
  price: Number,
  onsale: Boolean,
  photo: String,
  tags: [String],
});

// Methods
advertSchema.statics.list = function (filter, limit, skip, sort) {
  const query = Advert.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);
  return query.exec();
};
// Model
const Advert = mongoose.model('Advert', advertSchema, 'nodepop');

// Export model
module.exports = Advert;
