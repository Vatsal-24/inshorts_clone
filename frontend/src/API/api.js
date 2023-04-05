import axios from "axios";

const url = "http://localhost:5000";
export const getNews = async () => {
  try {
    const res = await axios.get(`${url}/news`);
    return res.data.news;
  } catch (err) {
    console.log("Error while fetching news", err);
  }
};
