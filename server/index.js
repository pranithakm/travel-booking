const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const placeRoutes = require('./routes/places'); // ✅
const bookingsRoute = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingsRoute);
// Mount routes
app.use('/api', authRoutes);
app.use('/api/places', placeRoutes); // ✅

mongoose.connect('mongodb://127.0.0.1:27017/mern-register', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(4000, () => console.log('Server running on port 4000'));
}).catch(err => console.log(err));