const express = require("express");
const {
  setRate,
  getRate,
  editRate,
} = require("../controllers/rate.controller");
const router = express.Router();

module.exports = router;

router.get("/", getRate);
router.post("/", setRate);
router.put("/:id", editRate);

module.exports = router;
