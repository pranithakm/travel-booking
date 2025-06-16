const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  placeId: String,
  placeTitle: String,
  budgetPlan: String,
  people: Number,
  startDate: String,
  endDate: String,
  totalPrice: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);