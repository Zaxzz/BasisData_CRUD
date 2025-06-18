// backend/routes/loan.js
const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

// CREATE - Tambah peminjaman baru
router.post('/', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL - Ambil semua data peminjaman
router.get('/', async (req, res) => {
  try {
    const loans = await Loan.find()
      .populate('book_id')  // Menampilkan detail buku
      .populate('user_id'); // Menampilkan detail user
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ by ID - Ambil satu data peminjaman
router.get('/:id', async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id)
      .populate('book_id')
      .populate('user_id');
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Ubah data peminjaman
router.put('/:id', async (req, res) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLoan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Hapus data peminjaman
router.delete('/:id', async (req, res) => {
  try {
    await Loan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Loan deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
