const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/User-Routes");
const channelRoute = require("./routes/Channel-Routes");
const messageRoute = require("./routes/Message-Route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Define allowed origins
const allowedOrigins = [
  "https://slack-clone-one-ivory.vercel.app",
  "http://localhost:5173", // Add any other development origins if needed
];

// Set up CORS middleware with dynamic origin check
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies to be sent
  })
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/channel", channelRoute);
app.use("/message", messageRoute);

app.get("/hi", (req, res) => {
  res.send("Hi");
});

const connect = mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error: " + err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
