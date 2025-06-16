const express = require('express');
const router = express.Router();
const Pembelian = require('../models/Pembelian'); 

router.get('/pembelian', async (req, res) => {
  try {
    const pembelianList = await Pembelian.find(); 
    res.json(pembelianList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/pembelian', async (req, res) => {
  try {
    const pembelian = new Pembelian(req.body);
    const savedPembelian = await pembelian.save(); 
    res.status(201).json(savedPembelian);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;