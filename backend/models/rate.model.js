const mongoose = require("mongoose");
const rateSchema = mongoose.Schema({
  date: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("rate", rateSchema);
