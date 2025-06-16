const express = require('express');
const router = express.Router();
const Barang = require('../models/Barang');

// GET semua barang
router.get('/', async (req, res) => {
  const barangs = await Barang.find();
  res.json(barangs);
});

// POST barang baru
router.post('/', async (req, res) => {
  try {
    const barang = new Barang(req.body);
    const saved = await barang.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;