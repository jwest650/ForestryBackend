const express = require("express");
const { getform, postform } = require("../controllers/form");
const router = express.Router();

router.get("/form", getform);
router.post("/form", postform);

module.exports = router;
