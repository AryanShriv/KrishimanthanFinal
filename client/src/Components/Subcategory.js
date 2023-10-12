// Subcategory.js
import React from "react";
import { useParams } from "react-router-dom";

const newsData = {
  Krishi: {
    national: [
      {
        id: 1,
        title: "National Agriculture News 1",
        image: "path_to_image_1.jpg",
        content: "Content of the news article...",
      },
      {
        id: 2,
        title: "National Agriculture News 2",
        image: "path_to_image_2.jpg",
        content: "Content of the news article...",
      },
      // ... more articles
    ],
    local: [
      {
        id: 3,
        title: "Local Agriculture News 1",
        image: "path_to_image_3.jpg",
        content: "Content of the news article...",
      },
      // ... more articles
    ],
    // ... more subcategories
  },
  cooperative: {
    national: [
      {
        id: 4,
        title: "National Cooperative News 1",
        image: "path_to_image_4.jpg",
        content: "Content of the news article...",
      },
      // ... more articles
    ],
    // ... more subcategories
  },
  // ... more categories
};


function Subcategory() {
  const { categoryName, subcategoryName } = useParams();

  const newsArticles = newsData[categoryName][subcategoryName];

  return (
    <div>
      <h1>{subcategoryName} News</h1>
      <ul>
        {newsArticles.map((news) => (
          <li key={news.id}>
            <a href={`/news/${news.id}`}>{news.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subcategory;
