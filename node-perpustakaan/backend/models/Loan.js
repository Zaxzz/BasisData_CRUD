// backend/models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // asumsi kamu punya model Book
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // relasi ke User
    required: true
  },
  loan_date: {
    type: Date,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Loan', loanSchema, "Loans");
