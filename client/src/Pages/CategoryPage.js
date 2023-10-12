// CategoryPage.js

import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = ({ newsData }) => {
  const { categoryName } = useParams(); // Extract category name from the URL parameter

  // Filter news items based on the selected category
  const filteredNews = newsData.filter(
    (news) => news.category === categoryName
  );

  return (
    <div className="category-page">
      <h2>Category: {categoryName}</h2>
      {/* Render news items in the filteredNews array */}
    </div>
  );
};

export default CategoryPage;
