/* eslint-disable indent */
var express = require("express");
const ValueController = require("../controllers/ValueController");

let router = express.Router();

router.post("/create", ValueController.create);
router.put("/update", ValueController.update);
router.get("/list", ValueController.list);
router.delete("/delete", ValueController.delete);

module.exports = router;
