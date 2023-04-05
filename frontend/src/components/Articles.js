import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { getNews } from "../API/api";
export default function Articles() {
  useEffect(() => {
    const dailyNews = async () => {
      let response = await getNews();
    };
    dailyNews();
  }, []);

  return (
    <>
      <Box></Box>
    </>
  );
}
