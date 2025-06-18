// backend/routes/fine.js
const express = require('express');
const router = express.Router();
const Fine = require('../models/Fine');

// CREATE - Tambah denda baru
router.post('/', async (req, res) => {
  try {
    const fine = new Fine(req.body);
    await fine.save();
    res.status(201).json(fine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL - Ambil semua denda
router.get('/', async (req, res) => {
  try {
    const fines = await Fine.find()
      .populate('loan_id') // jika ingin detail pinjaman
      .populate('user_id'); // jika ingin detail user
    res.json(fines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ by ID - Ambil satu denda berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const fine = await Fine.findById(req.params.id)
      .populate('loan_id')
      .populate('user_id');
    if (!fine) return res.status(404).json({ message: 'Fine not found' });
    res.json(fine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Ubah denda
router.put('/:id', async (req, res) => {
  try {
    const updatedFine = await Fine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Hapus denda
router.delete('/:id', async (req, res) => {
  try {
    await Fine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fine deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
