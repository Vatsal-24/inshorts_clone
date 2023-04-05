import axios from "axios";

const url = "";
export const getNews = async () => {
  try {
    const res = await axios.get(`${url}`);
    return res.data;
  } catch (err) {
    console.log("Error while fetching news", err);
  }
};
