const RateModel = require("../models/rate.model");

module.exports.getRate = async (req, res) => {
  const rate = await RateModel.find();
  res.status(200).json(rate);
};

module.exports.setRate = async (req, res) => {
  if (!req.body.rate) {
    res.status(400).json({ message: "Merci d'ajouter un tarif par défault." });
  }
  const rate = await RateModel.create({
    date: req.body.date,
    rate: req.body.rate,
    available: req.body.available,
  });
  res.status(200).json(rate);
};

module.exports.editRate = async (req, res) => {
  const rate = await RateModel.findById(req.params.id);
  if (!rate) {
    res.status(400).json({
      message: "ce tarif n'existe pas.",
    });
  }
  const updateRate = await RateModel.findByIdAndUpdate(rate, req.body, {
    new: true,
  });
  res.status(200).json(updateRate);
};
