// NewsDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const { newsId } = useParams();

  const news = {}; // Fetch news article details based on newsId from your data

  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.image} alt={news.title} />
      <p>{news.content}</p>
    </div>
  );
}

export default NewsDetail;
