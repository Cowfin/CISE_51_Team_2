const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  ID: {
    type: 'number',
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  Authors: {
    type: String,
    required: true
  },
  Source: {
    type: String,
    required: true
  },
  Year: {
    type: 'number',
    required: true
  },
  DOI: {
    type: String
  },
  Claim: {
    type: String,
    required: true
  },
  Evidence_Level: {
      type: String,
      required: true
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);