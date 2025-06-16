const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/toko';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB', err));

const BarangSchema = new mongoose.Schema({
  nama: String,
  harga_beli: Number,
  harga_jual: Number,
  jenis_barang: String,
  stok: Number,
  deskripsi: String
});

const Barang = mongoose.model('Barang', BarangSchema);

// Simpan data contoh
const barangBaru = new Barang({ nama: 'Indomie Rendang', harga_beli: 2500, harga_jual: 3500,
  jenis_barang: 'makanan pokok', stok: 28, deskripsi: 'makanan instan' });

barangBaru.save()
.then(doc => console.log('Barang tersimpan:', doc))
.catch(err => console.error('Gagal simpan barang:', err));