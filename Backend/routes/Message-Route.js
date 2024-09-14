  const express = require("express");
  const router = express.Router();
  const {
    handleMessageFetching,
    handleNewMessageCreation,
  } = require("../controllers/Message-Controller");

  router.post("/channels/:channelId/messages", handleNewMessageCreation);
  router.get("/channels/:channelId/messages", handleMessageFetching);

  module.exports = router;
