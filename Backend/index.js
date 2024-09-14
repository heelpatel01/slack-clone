const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/User-Routes");
const channelRoute = require("./routes/Channel-Routes");
const messageRoute = require("./routes/Message-Route");
const cors = require("cors");
const cookieParser = require("cookie-parser");


app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/channel", channelRoute);
app.use("/message", messageRoute);

app.get("/", (req, res) => {
  res.send("Hi");
});

const connect = mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error: " + err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
