const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/toko_mongo';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB', err));

const PenjualanSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  tanggal_penjualan: Date
});

const Penjualan = mongoose.model('Penjualan', PenjualanSchema);

// Simpan data contoh penjualan
const penjualanBaru = new Penjualan({
  nama: 'Paramex',
  stok: 11,
  tanggal_penjualan: new Date('2025-05-05T06:13:52.782Z')
});

penjualanBaru.save()
.then(doc => console.log('Penjualan tersimpan:', doc))
.catch(err => console.error('Gagal simpan penjualan:', err));