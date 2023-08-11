const express = require("express");
const { setRates } = require("../controllers/rate.controller");
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  res.json({ message: "voici les données" });
});
router.post("/", setRates);
router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

module.exports = router;
