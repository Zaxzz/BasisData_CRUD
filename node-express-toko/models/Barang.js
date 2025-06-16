const mongoose = require('mongoose');

const BarangSchema = new mongoose.Schema({
  nama: String,
  harga_beli: Number,
  harga_jual: Number,
  jenis_barang: String,
  stok: Number,
  deskripsi: String
});

module.exports = mongoose.model('Barang', BarangSchema);