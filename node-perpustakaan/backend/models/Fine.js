// backend/models/Fine.js
const mongoose = require('mongoose');

const fineSchema = new mongoose.Schema({
  loan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan', 
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Fine', fineSchema, "Fines");
