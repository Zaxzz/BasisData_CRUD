const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/toko_mongo';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB', err));

const KaryawanSchema = new mongoose.Schema({ 
  nama: String,
  jabatan: String, 
  gaji: Number    
});

const Karyawan = mongoose.model('Karyawan', KaryawanSchema); 

// Simpan data contoh karyawan
const karyawanBaru = new Karyawan({ 
  nama: 'Gadhang',         
  jabatan: 'Direktur',
  gaji: 2000000
});

karyawanBaru.save() // Diubah dari penjualanBaru
.then(doc => console.log('Karyawan tersimpan:', doc)) 
.catch(err => console.error('Gagal simpan karyawan:', err));  