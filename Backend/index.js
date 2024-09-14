const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/User-Routes");
const channelRoute = require("./routes/Channel-Routes");
const messageRoute = require("./routes/Message-Route");

var cookieParser = require("cookie-parser");

app.use(cookieParser());

const connect = mongoose
  .connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("DB Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/channel", channelRoute);
app.use("/message", messageRoute);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3000);
