const express = require("express");
const {
  setRates,
  getRates,
  editRate,
  deleteRate,
} = require("../controllers/rate.controller");
const router = express.Router();

module.exports = router;

router.get("/", getRates);
router.post("/", setRates);
router.put("/:id", editRate);
router.delete("/:id", deleteRate);
module.exports = router;
