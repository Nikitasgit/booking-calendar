const DefaultRateModel = require("../models/defaultRate.model");

module.exports.getDefaultRate = async (req, res) => {
  const defaultRate = await DefaultRateModel.find();
  res.status(200).json(defaultRate);
};

module.exports.setDefaultRate = async (req, res) => {
  if (!req.body.defaultRate) {
    res.status(400).json({ message: "Merci d'ajouter un tarif par défault." });
  }
  const defaultRate = await DefaultRateModel.create([
    {
      defaultRate: req.body.defaultRate,
      accomodation: req.body.accomodation,
    },
  ]);
  res.status(200).json(defaultRate);
};

module.exports.editDefaultRate = async (req, res) => {
  const defaultRate = await DefaultRateModel.findById(req.params.id);
  if (!defaultRate) {
    res.status(400).json({
      message: "ce tarif n'existe pas.",
    });
  }
  const updateDefaultRate = await DefaultRateModel.findByIdAndUpdate(
    defaultRate,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateDefaultRate);
};
