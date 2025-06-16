// backend/routes/penjualan.js
const express = require('express');
const router = express.Router();
const Penjualan = require('../models/Penjualan');

// CREATE
router.post('/', async (req, res) => {
  try {
    const penjualan = new Penjualan(req.body);
    await penjualan.save();
    res.status(201).json(penjualan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const data = await Penjualan.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Penjualan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Penjualan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
