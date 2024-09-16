const express = require("express");
const router = express.Router();
const {handleChannelCreation,handleChannelGet}=require("../controllers/Channel-Controller");

router.get("/fetchChannels", handleChannelGet);
router.post("/createChannel", handleChannelCreation);
router.post("/:channelId/invite/:userId")

module.exports = router;
