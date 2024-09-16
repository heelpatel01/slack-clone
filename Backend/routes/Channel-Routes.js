const express = require("express");
const router = express.Router();
const {handleChannelCreation,handleChannelGet,handleChannelInvite}=require("../controllers/Channel-Controller");

router.get("/fetchChannels", handleChannelGet);
router.post("/createChannel", handleChannelCreation);
router.post("/:channelId/invite/:userId",handleChannelInvite)

module.exports = router;
