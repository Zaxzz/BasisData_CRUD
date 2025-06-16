const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/toko_mongo';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB', err));

const SupplierSchema = new mongoose.Schema({
  nama_supplier: String,
  alamat: String,
  kode_pos: Number,
  nama: String
});

const Supplier = mongoose.model('Supplier', SupplierSchema);

// Simpan data contoh supplier
const supplierBaru = new Supplier({
  nama_supplier: 'Angga',
  alamat: 'Semarang',
  kode_pos: 75923,
  nama: 'Paramex'
});

supplierBaru.save()
.then(doc => console.log('Supplier tersimpan:', doc))
.catch(err => console.error('Gagal simpan supplier:', err));