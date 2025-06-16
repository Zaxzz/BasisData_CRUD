// backend/models/Barang.js
const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  harga_beli: { type: Number, required: true },
  harga_jual: { type: Number, required: true },
  jenis_barang: { type: String, required: true },
  stok: { type: Number, required: true },
  deskripsi: { type: String, required: true },
});

module.exports = mongoose.model('Barang', barangSchema);