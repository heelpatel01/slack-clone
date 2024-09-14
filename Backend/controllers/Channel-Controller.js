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

    console.log(userWithChannel.channels);

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


module.exports={handleChannelCreation,handleChannelGet};
