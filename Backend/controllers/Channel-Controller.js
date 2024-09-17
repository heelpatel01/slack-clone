const Channel = require("../models/Channel");
const User = require("../models/User");

const handleChannelCreation = async (req, res) => {
  try {
    //get user id from cookies

    const { name } = req.body;

    const userId = req.cookies.userId;
    // const user = User.findOneAndUpdate({ userId });

    //create new channel and add new user
    const newChannel = new Channel({ name: name, members: [userId] });
    await newChannel.save();

    //add user channelId in user documents array

    await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          channels: newChannel._id,
        },
      },
      { new: true }
    );

    //return the successfull message

    return res
      .status(201)
      .json({ message: "Channel Added Successfully", channels: newChannel });
  } catch (error) {
    return res.status(501).json({
      message: "channel creation error",
      error: error.message,
    });
  }
};

const handleChannelGet = async (req, res) => {
  try {
    const userId = await req.cookies.userId;

    if (!userId) {
      return res
        .json({
          message: "create account",
        })
        .status(201);
    }

    const userWithChannel = await User.findById(userId)
      .populate("channels")
      .exec();

    if (!userWithChannel) {
      return res
        .json({
          message: "User does not have any channel",
        })
        .status(404);
    }

    // console.log(userWithChannel.channels);

    return res.status(201).json({
      message: "Yo channel fetched successfully!",
      channels: userWithChannel.channels,
    });
  } catch (error) {
    console.log("Error: " + error);
    return res.status(501).json({
      message: "error while fetching channels",
      error: error,
    });
  }
};

// channels/:channelId/invite/:userId
const handleChannelInvite = async (req, res) => {
  const { channelId, userId } = req.params;

  if (!channelId || !userId) {
    return res.json({
      success: false,
      message: "Please provide channelId and UserId",
    });
  }

  //check in channel and user either it exists in each others array or not // if doesnt exist then add it for both //return
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exists!",
      });
    }

    const channel = await Channel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: "Channel not found!",
      });
    }

    //check if the user is already in channels list or not
    const checkExistance = channel.members.includes(userId);
    if (checkExistance) {
      return res.status(400).json({
        success: false,
        message: "User is already member of this channel!!!",
      });
    }

    channel.members.push(userId);
    user.channels.push(channelId);

    await user.save();
    await channel.save();

    return res.status(200).json({
      success: true,
      message: "Yo! user invited successully 🎉",
    });
  } catch (error) {
    console.log("Error while inviting the user: " + error);
    return res.status(500).json({
      success: false,
      message: "server error while inviting an user!!!",
    });
  }
};

module.exports = {
  handleChannelCreation,
  handleChannelGet,
  handleChannelInvite,
};
