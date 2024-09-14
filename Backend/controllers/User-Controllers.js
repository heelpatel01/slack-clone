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
        .cookie("user id", user._id, { httpOnly: true })
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
      return res.status(401).json({ error: "Invalid password" });
    }
    return res
      .cookie("userId", user._id, { httpOnly: true })
      .status(200)
      .json({ message: "Login successful", user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error (User-Controller)" });
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

module.exports = { handleSignup, handleLogin, handleLogOut };
