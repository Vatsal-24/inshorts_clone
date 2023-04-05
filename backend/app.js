const express = require("express");
const dotenv = require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const uploadDataByDefault = require("./default");
const newsRouter = require("./routes/newsRoutes");

// creating express app
const app = express();

//Parsing url
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// allowing cross origin
app.use(cors({ credentials: true }));

// connecting database
const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("DB connection successful");
});

// routes
app.use("/news", newsRouter);
// starting the server
app.listen(process.env.PORT, () => {
  console.log("server is running successfully on port:", process.env.PORT);
});

uploadDataByDefault.uploadDataByDefault();
