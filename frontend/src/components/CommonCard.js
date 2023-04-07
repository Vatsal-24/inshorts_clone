import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import newsImage from "../newsImage.jpg";

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
  return (
    <>
      <Card style={style.card}>
        <CardContent style={style.cardContentContainer}>
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <img
                src={data.urlToImage || newsImage}
                alt="news"
                style={style.img}
              />
            </Grid>
            <Grid
              item
              container
              lg={7}
              md={7}
              sm={7}
              xs={12}
              style={style.rightContainer}
              spacing={2}
            >
              <Typography style={style.title}>{data.title}</Typography>
              <Typography style={style.author}>
                <b>Short</b> by {data.author || "Vatsal"} /{" "}
                {new Date(data.publishedAt).toDateString()}
              </Typography>
              <Typography style={style.description}>
                {data.content || data.description}
              </Typography>
              <Typography style={style.publisher}>
                read more at{" "}
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  style={style.anchor}
                >
                  <b>{data.source.name || "Vatsal News"}</b>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
