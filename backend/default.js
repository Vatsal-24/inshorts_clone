const data = require("./constants/constants");
const News = require("./models/newsModel");
const axios = require("axios");
const cors = require("cors");

exports.uploadDataByDefault = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}&pageSize=100&category=general`
    );
    await News.insertMany(res.data.articles);
    // await News.deleteMany({});
    console.log("Default data fetch success");
  } catch (err) {
    console.log("Default data fetch failed", err);
  }
};
