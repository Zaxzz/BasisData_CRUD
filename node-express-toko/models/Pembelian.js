const mongoose = require('mongoose');

const PembelianSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  nama_supplier: String,
  tanggal_pembelian: Date
});

module.exports = mongoose.model('pembelian', PembelianSchema);