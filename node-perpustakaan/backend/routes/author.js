// backend/routes/author.js
const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// CREATE
router.post('/', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const data = await Author.find().populate('book_id'); // populate book_id jika ingin ambil detail bukunya
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ by ID (tambahin ini!)
router.get('/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('book_id');
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
