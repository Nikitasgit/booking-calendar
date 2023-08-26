const express = require("express");
const { setImg, getImg, deleteImg } = require("../controllers/img.controller");
const router = express.Router();

module.exports = router;

router.get("/", getImg);
router.post("/", setImg);
router.delete("/:id", deleteImg);

module.exports = router;
