const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {
  handleSignup,
  handleLogin,
} = require("../controllers/User-Controllers");

router.post("/create-user", handleSignup);

// Login
router.post("/login", handleLogin);

module.exports = router;