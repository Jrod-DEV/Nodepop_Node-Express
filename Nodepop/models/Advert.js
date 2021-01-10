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

// Model
const Agente = mongoose.model('Advert', advertSchema, 'nodepop');

// Export model
module.exports = Agente;