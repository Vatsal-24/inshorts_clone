const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  source: {
    type: Object,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
  },
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
