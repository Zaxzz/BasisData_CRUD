// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/toko_fullstack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

const barangRoutes = require('./routes/barang');
const supplierRoutes = require('./routes/supplier');
const pembelianRoutes = require('./routes/pembelian'); 
const penjualanRoutes = require('./routes/penjualan');

app.use('/api/barang', barangRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/pembelian', pembelianRoutes); 
app.use('/api/penjualan', penjualanRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
