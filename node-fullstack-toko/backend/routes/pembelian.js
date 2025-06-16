// backend/routes/pembelian.js
const express = require('express');
const router = express.Router();
const Pembelian = require('../models/Pembelian');

// CREATE
router.post('/', async (req, res) => {
  try {
    const pembelian = new Pembelian(req.body);
    await pembelian.save();
    res.status(201).json(pembelian);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const data = await Pembelian.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Pembelian.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Pembelian.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
