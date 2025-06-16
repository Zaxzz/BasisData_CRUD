const express = require('express');
const router = express.Router();
const Karyawan = require('../models/Karyawan');

router.get('/karyawan', async (req, res) => {
  try {
    const karyawanList = await Karyawan.find();
    res.json(karyawanList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/karyawan', async (req, res) => {
  try {
    const karyawan = new Karyawan(req.body);
    const savedKaryawan = await karyawan.save();
    res.status(201).json(savedKaryawan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;