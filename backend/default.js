const data = require("./constants/constants");
const News = require("./models/newsModel");

exports.uploadDataByDefault = async () => {
  try {
    await News.insertMany(data);
    console.log("Default data fetch success");
  } catch (err) {
    console.log("Default data fetch failed", err);
  }
};
