const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const scheduleRoutes = require('./routes/scheduleRoutes');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ MongoDB Connection
mongoose.connect('mongodb+srv://spofficial:Sbhat6336@conference.a9mpumf.mongodb.net/?retryWrites=true&w=majority&appName=Conference', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// API routes
app.use('/api/schedule', scheduleRoutes);

// ✅ Route for root URL → serve index.html from public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
