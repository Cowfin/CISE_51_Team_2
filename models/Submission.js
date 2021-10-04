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
    type: "array",
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
  Practice: {
    type: String,
    required: true 
}
});

module.exports = Article = mongoose.model('article', ArticleSchema);