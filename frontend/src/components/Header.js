import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Typography, AppBar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  header: {
    backgroundColor: "#fff",
    height: "72px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "#44444D",
    fontSize: "14px",
    fonrFamily: "Roboto",
  },
  icon: {
    color: "#222222",
    fontSize: "32px",
  },
  logo: {
    height: "72px",
    margin: "auto",
  },
};
export default function Header() {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <div>
      <AppBar style={style.header} position="static">
        <Toolbar>
          <Box style={style.iconContainer}>
            <MenuIcon style={style.icon} />
            <Typography style={style.text}>Menu</Typography>
          </Box>
          <Box style={{ margin: "auto" }}>
            <img src={url} alt="logo" style={style.logo} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
