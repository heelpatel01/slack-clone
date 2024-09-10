const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/User-Routes");
const connect = mongoose
  .connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("DB Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);


app.get("/", (req, res) => {
  res.send("HIii");
});

app.listen(3000);
