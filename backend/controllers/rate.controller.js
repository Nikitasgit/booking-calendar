const RateModel = require("../models/rate.model");

module.exports.getRates = async (req, res) => {
  const rates = await RateModel.find();
  res.status(200).json(rates);
};

module.exports.setRates = async (req, res) => {
  if (!req.body.date) {
    res.status(400).json({
      message:
        "Merci d'ajouter un tarif, une date, le nom du logement et si celui-ci est disponnible.",
    });
  }
  const rate = await RateModel.create({
    date: req.body.date,
    rate: req.body.rate,
    available: req.body.available,
    accomodation: req.body.accomodation,
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
module.exports.deleteRate = async (req, res) => {
  const rate = await RateModel.findById(req.params.id);

  if (!rate) {
    res.status(400).json({ message: "Ce tarif n'existe pas" });
  }
  await rate.deleteOne();
  res.status(200).json("tarif supprimé " + req.params.id);
};
