const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price_per_person_rupees: { type: Number, required: true },
  days: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  plan_per_day: [{ type: String }],  // or adjust type if more complex
  places_covered: [{ type: String }],
  language_used: { type: String }
});

module.exports = mongoose.model('Place', placeSchema);