import React from "react";
import { Box, Typography } from "@mui/material";
import useWindowDimensions from "./windowDimension";

const style = {
  container: {
    backgroundColor: "#f44446",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    height: "48px",
    marginBottom: "30px",
  },
  smallScreenContainer: {
    display: "none",
  },
  text: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "300",
    marginLeft: "50px",
  },
  imageContainer: {
    display: "flex",
    marginLeft: "auto",
  },
  image: {
    height: "34px",
    margin: "0 50px 0 20px",
  },
};
export default function InfoHeader() {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Box style={width >= 1220 ? style.container : style.smallScreenContainer}>
        <Typography style={style.text}>
          For the best experience use inshorts app on your smartphone
        </Typography>
        <Box style={style.imageContainer}>
          <img src={appleStore} alt="apple-store-logo" style={style.image} />
          <img src={googleStore} alt="google-store-logo" style={style.image} />
        </Box>
      </Box>
    </>
  );
}
