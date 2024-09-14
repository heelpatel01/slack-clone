const express = require("express");
// const User = require("../models/User");
const router = express.Router();
const {
  handleSignup,
  handleLogin,
  handleLogOut
} = require("../controllers/User-Controllers");

router.post("/create-user", handleSignup);

// Login
router.post("/login", handleLogin);

router.delete("/logout",handleLogOut);

module.exports = router;