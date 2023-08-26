const ImgModel = require("../models/img.model");

module.exports.getImg = async (req, res) => {
  const img = await ImgModel.find();
  res.status(200).json(img);
};

module.exports.setImg = async (req, res) => {
  if (!req.body.img) {
    res.status(400).json({ message: "Merci d'ajouter une image et un nom." });
  }
  const img = await ImgModel.create([
    {
      img: req.body.img,
    },
  ]);
  res.status(200).json(img);
};

module.exports.deleteImg = async (req, res) => {
  const img = await ImgModel.findById(req.params.id);

  if (!img) {
    res.status(400).json({ message: "Cette image n'existe pas." });
  }
  await img.deleteOne();
  res.status(200).json("Photo supprimée" + req.params.id);
};
