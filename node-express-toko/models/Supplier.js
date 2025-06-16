const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  nama_supplier: String,
  alamat: String,
  kode_pos: Number,
  nama: String
});

module.exports = mongoose.model('Supplier', SupplierSchema);