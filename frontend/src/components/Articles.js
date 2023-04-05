import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getNews } from "../API/api";
export default function Articles() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const dailyNews = async () => {
      let response = await getNews();
      setNews(response);
    };
    dailyNews();
  }, []);

  return (
    <>
      <Box>
        {news.map((news) => (
          <p>{news.title}</p>
        ))}
      </Box>
    </>
  );
}
