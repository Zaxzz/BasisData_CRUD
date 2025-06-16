const mongoose = require('mongoose');

const KaryawanSchema = new mongoose.Schema({
  nama: String,
  jabatan: String,
  gaji: Number
});

module.exports = mongoose.model('Karyawan', KaryawanSchema);