const mongoose = require("mongoose");
const defaultRateSchema = mongoose.Schema({
  defaultRate: { type: Number, required: true },
  accomodation: { type: String, required: true },
});

module.exports = mongoose.model("defaultRate", defaultRateSchema);
