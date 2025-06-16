const mongoose = require('mongoose');

const PenjualanSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  tanggal_penjualan: Date
});

module.exports = mongoose.model('Penjualan', PenjualanSchema);