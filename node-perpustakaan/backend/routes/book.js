// backend/routes/book.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// CREATE - Tambah buku baru
router.post('/', async (req, res) => {
  try {
    const { title, genre, publication_year } = req.body;
    const book = new Book({ title, genre, publication_year });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL - Ambil semua buku
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ by ID - Ambil satu buku berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Ubah data buku berdasarkan ID
router.put('/:id', async (req, res) => {
  try {
    const { title, genre, publication_year } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, genre, publication_year },
      { new: true }
    );
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Hapus buku berdasarkan ID
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
