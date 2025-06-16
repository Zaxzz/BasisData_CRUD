const express = require('express');
const router = express.Router();
const Penjualan = require('../models/Penjualan'); // Pastikan path ini benar ke file model Penjualan Anda

// GET semua penjualan
router.get('/penjualan', async (req, res) => {
  try {
    const penjualanList = await Penjualan.find();
    res.json(penjualanList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST penjualan baru
router.post('/penjualan', async (req, res) => {
  try {
    const penjualan = new Penjualan(req.body);
    const savedPenjualan = await penjualan.save();
    res.status(201).json(savedPenjualan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;