const express = require("express");
const { createAdmin, login } = require("../controllers/admin");

const router = express.Router();

router.post("/admin", createAdmin);
router.post("/login", login);

module.exports = router;
