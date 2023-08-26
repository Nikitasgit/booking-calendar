const mongoose = require("mongoose");
const imgSchema = mongoose.Schema({
  img: { type: String, required: true },
});

module.exports = mongoose.model("img", imgSchema);
