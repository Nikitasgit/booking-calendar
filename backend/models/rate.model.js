const mongoose = require("mongoose");
const rateSchema = mongoose.Schema({
  rate: { type: Number, required: true },
});

module.exports = mongoose.model("rate", rateSchema);
