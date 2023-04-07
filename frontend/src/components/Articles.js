import React, { useEffect, useState } from "react";
import { getNews } from "../API/api";
import CommonCard from "./CommonCard";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Articles() {
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchMoreData = async () => {
      const response = await getNews(page);
      if (response.news.length < 5) {
        setHasMore(false);
      }
      setNews([...news, ...response.news]);
    };
    fetchMoreData();
  }, [page]);

  return (
    <>
      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((page) => page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {news.map((news, index) => (
          <CommonCard data={news} key={index} />
        ))}
      </InfiniteScroll>
    </>
  );
}
