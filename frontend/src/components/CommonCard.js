import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import useWindowDimensions from "./windowDimension";

const style = {
  card: {
    marginBottom: "20px",
    boxShadow: "0 2px 5px 0px rgba(0 0 0  0.16)!important",
  },
  cardContentContainer: {
    padding: "8px",
    paddingBottom: "4px!important",
  },
  img: {
    height: "268px",
    width: "88%",
    objectFit: "cover",
    borderRadius: "5px",
  },
  rightContainer: {
    margin: "5px 0 0 -25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  mediumRightContainer: {
    margin: "5px 0 0 25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  title: {
    fontWeight: "300",
    fontSize: "22px",
    color: "#44444D",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "27px",
    marginBottom: "10px",
  },
  author: {
    color: "#808290",
    fontSize: "12px",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "22px",
    marginBottom: "10px",
  },
  description: {
    lineHeight: "22px",
    color: "#44444D",
    marrginTop: "5px",
  },
  publisher: {
    fontSize: "12px",
    marginTop: "auto",
    marginBottom: "10px",
  },
  anchor: {
    textDecoration: "none",
    color: "#44444D",
  },
};
export default function CommonCard(props) {
  const { data } = props;
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Card style={style.card}>
        <CardContent style={style.cardContentContainer}>
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <img src={data.url} alt="news" style={style.img} />
            </Grid>
            <Grid
              item
              container
              lg={7}
              md={7}
              sm={7}
              xs={12}
              style={
                width >= 1220
                  ? style.rightContainer
                  : style.mediumRightContainer
              }
              spacing={2}
            >
              <Typography style={style.title}>{data.title}</Typography>
              <Typography style={style.author}>
                <b>Short</b> by {data.author} /{" "}
                {new Date(data.timestamp).toDateString()}
              </Typography>
              <Typography style={style.description}>
                {data.description}
              </Typography>
              <Typography style={style.publisher}>
                read more at{" "}
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  style={style.anchor}
                >
                  <b>{data.publisher}</b>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
