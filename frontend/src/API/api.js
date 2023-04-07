import axios from "axios";

const url = "http://localhost:5000";
export const getNews = async (page, size = 5) => {
  try {
    let res = await axios.get(`${url}/news?page=${page}&size=${size}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("Error while fetching news", err);
  }
};
