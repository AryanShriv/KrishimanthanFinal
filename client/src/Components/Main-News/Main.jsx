import React from "react";
import Article from "./Main-News"; // Import the Article component
import Gallery from "../Gallery/Gallery"; // Import the Gallery component
import "./main-News.css"; // Import your custom CSS for MainNews styling

const MainNews = () => {
  return (
    <div className="main-news-container">
      <Article />
      <Gallery />
    </div>
  );
};

export default MainNews;
