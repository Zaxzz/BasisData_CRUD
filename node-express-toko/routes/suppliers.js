const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier'); 

router.get('/supplier', async (req, res) => {
  try {
    const supplierList = await Supplier.find();
    res.json(supplierList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST supplier baru
router.post('/supplier', async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    const savedSupplier = await supplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;