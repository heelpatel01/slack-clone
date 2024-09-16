const express = require("express");
// const User = require("../models/User");
const router = express.Router();
const {
  handleSignup,
  handleLogin,
  handleLogOut,
  checkUserLogin,
  handleFetchUsersToInvite,
} = require("../controllers/User-Controllers");

router.post("/create-user", handleSignup);

// Login
router.post("/login", handleLogin);

router.delete("/logout", handleLogOut);

router.get("/checkUserLogin", checkUserLogin);

router.get("/channels/:channelId/invite", handleFetchUsersToInvite);

module.exports = router;
