const News = require("../models/newsModel");

exports.getNews = async (req, res) => {
  try {
    const size = Number(req.query.size);
    const skip = Number(req.query.page);
    console.log(size, skip);
    const news = await News.find({})
      .limit(size)
      .skip(size * skip);
    console.log(news);
    return res.status(200).json({
      status: "success",
      message: "news fetched successfully",
      news: news,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Error getting news",
      error: err,
    });
  }
};
