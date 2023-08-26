const express = require("express");
const {
  setDefaultRate,
  getDefaultRate,
  editDefaultRate,
} = require("../controllers/defaultRate.controller");
const router = express.Router();

module.exports = router;

router.get("/", getDefaultRate);
router.post("/", setDefaultRate);
router.put("/:id", editDefaultRate);

module.exports = router;
