const express = require("express");
const router = express.Router();
const controller = require("./../controllers/ProductController");

router.get("/", controller.home);
router.post("/add", controller.add);
router.get("/api/all", controller.getAll);
module.exports = router;
