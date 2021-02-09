/* eslint-disable indent */
var express = require("express");
const PrincipleController = require("../controllers/PrincipleController");

let router = express.Router();

router.post("/create", PrincipleController.create);
router.put("/update", PrincipleController.update);
router.get("/list", PrincipleController.list);
router.delete("/delete", PrincipleController.delete);

module.exports = router;
