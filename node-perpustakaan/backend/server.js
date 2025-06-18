// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/perpustakaan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const authorRoutes = require('./routes/author');
const loanRoutes = require('./routes/loan');
const fineRoutes = require('./routes/fine');

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/fines', fineRoutes);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
