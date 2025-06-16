// backend/models/Pembelian.js
const mongoose = require('mongoose');

const pembelianSchema = new mongoose.Schema({
  nama: { type: String, required: true },             
  stok: { type: Number, required: true },              
  nama_supplier: { type: String, required: true },    
  tanggal_pembelian: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pembelian', pembelianSchema);
