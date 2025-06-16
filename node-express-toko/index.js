const express = require('express');
const mongoose = require('mongoose');
const Barang = require('./models/Barang'); 
const Pembelian = require('./models/Pembelian'); 
const pembelianRoutes = require('./routes/pembelians'); 
const penjualanRoutes = require('./routes/penjualans'); 
const SupplierRoutes = require('./routes/suppliers'); 
const karyawanRoutes = require('./routes/karyawans'); 

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/toko_mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal tekoneksi:', err));

// Route dasar
app.get('/', (req, res) => {
  res.send('API aktif'); 
});

// ROUTE UNTUK BARANG
// ambil semua barang
app.get('/barang', async (req, res) => {
  const data = await Barang.find();
  res.json(data);
});

//tambah barang baru
app.post('/barang', async (req, res) => {
  try {
    const barang = new Barang(req.body);
    const saved = await barang.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.use('/api', pembelianRoutes); 
app.use('/api', penjualanRoutes);
app.use('/api', SupplierRoutes);
app.use('/api', karyawanRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});