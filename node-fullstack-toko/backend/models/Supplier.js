// backend/models/supplier.js
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  nama_supplier: { type: String, required: true },
  alamat: { type: String, required: true },
  kode_pos: { type: Number, required: true },
  nama: { type: String, required: true }
});

module.exports = mongoose.model('Supplier', supplierSchema);
