const User = require("../models/User");

async function handleSignup(req, res) {
  try {
    const { userName, email, password } = await req.body;

    if (password.length < 6) {
      return res
        .json({ message: "Password should have minimum 6 length" })
        .status(409);
    }

    const isUserExist = await User.findOne({ $or: [{ userName }, { email }] });

    if (isUserExist) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    } else {
      const newUser = await User.create({ userName, email, password });
      newUser.save();

      return res
        .cookie("userId", newUser._id, { httpOnly: true })
        .status(201)
        .json({ message: "User created successfully", newUser });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error (User-Controller)" });
  }
}

async function handleLogin(req, res) {
  try {
    const { userNameOrEmail, password } = req.body;

    const user = await User.findOne({
      $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the password is correct
    const isPasswordValid = user.password == password;

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Invalid password", success: false });
    }
    return res
      .cookie("userId", user._id, { httpOnly: true })
      .status(200)
      .json({ message: "Login successful", user, success: true });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error (User-Controller)",
      success: false,
    });
  }
}

async function handleLogOut(req, res) {
  if (req.cookies.userId) {
    return res.clearCookie("userId").json({
      message: "User Loggedout Successfully!",
    });
  } else {
    return res.json({
      message: "User already loggedout!",
    });
  }
}

async function checkUserLogin(req, res) {
  if (req.cookies.userId) {
    const user = await User.findById(req.cookies.userId);

    if (!user) {
      return res.status(200).json({
        message: "User is unauthenticated",
        isLoggedIn: false,
      });
    }

    return res.status(200).json({
      message: "User is logged in",
      isLoggedIn: true,
      name: user.userName,
      email: user.email,
    });
  } else {
    return res.status(200).json({
      message: "User is not logged in",
      isLoggedIn: false,
    });
  }
}

//handleFetchUsersToInvite channels/:channelId/invite/
async function handleFetchUsersToInvite(req, res) {
  try {
    console.log("You were fucked up at this momemnt 1");
    const { channelId } = req.params;
    console.log("You were fucked up at this momemnt 2");

    const usersList = await User.find({
      channels: {
        $nin: [channelId],
      },
    });
    // console.log("You were fucked up at this momemnt 3"+ usersList)

    if (usersList.length === 0 || !usersList) {
      return res.status(404).json({
        success: false,
        message: "No user available to invite",
      });
    }

    return res.status(200).json({ success: true, message: usersList });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while fetching the users to invite!",
    });
  }
}

module.exports = { handleFetchUsersToInvite };

module.exports = {
  handleSignup,
  handleLogin,
  handleLogOut,
  checkUserLogin,
  handleFetchUsersToInvite,
};
