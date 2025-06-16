// backend/models/Penjualan.js
const mongoose = require('mongoose');

const penjualanSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  stok: { type: Number, required: true },
  tanggal_penjualan: { type: Date, required: true }
});

module.exports = mongoose.model('Penjualan', penjualanSchema);
