const mongoose = require("mongoose");
const rateSchema = mongoose.Schema({
  date: { type: String, required: true },
  rate: { type: Number, required: true },
  available: { type: Boolean, required: true },
  accomodation: { type: String, required: true },
});

module.exports = mongoose.model("rate", rateSchema);
