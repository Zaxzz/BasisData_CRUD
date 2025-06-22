// backend/models/Author.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  birth_year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Author', authorSchema, "Authors");
