const RateModel = require("../models/rate.model");

module.exports.setRates = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }
};
