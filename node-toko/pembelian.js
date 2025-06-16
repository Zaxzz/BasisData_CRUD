const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/toko_mongo';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB', err));

const PembelianSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  nama_supplier: String,
  tanggal_pembelian: Date
});

const Pembelian = mongoose.model('pembelian', PembelianSchema);

// Simpan data contoh pembelian
const pembelianBaru = new Pembelian({
  nama: 'Paremex',
  stok: 51,
  nama_supplier: 'Angga',
  tanggal_pembelian: new Date('2025-05-05T06:04:35.872Z')
});

pembelianBaru.save()
.then(doc => console.log('Pembelian tersimpan:', doc))
.catch(err => console.error('Gagal simpan pembelian:', err));