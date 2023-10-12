// Category.js
import React from "react";
import { useParams } from "react-router-dom";

const categories = {
  krishi: [
    "national",
    "local",
    "international",
    "technology",
    "events",
    "analysis",
    "market",
    "weather",
  ],
  sahkarita: [
    "national",
    "local",
    "cooperatives",
    "finance",
    "policy",
    "interviews",
    "success-stories",
    "events",
  ],
  pashupalan: [
    "national",
    "local",
    "livestock",
    "animal-health",
    "dairy",
    "poultry",
    "market",
    "events",
  ],
  panchayat: [
    "national",
    "local",
    "governance",
    "policy",
    "development",
    "elections",
    "issues",
    "events",
  ],
  van: [
    "national",
    "local",
    "conservation",
    "wildlife",
    "biodiversity",
    "ecotourism",
    "research",
    "events",
  ],
};

function Category() {
  const { categoryName } = useParams();

  const subcategories = categories[categoryName];

  return (
    <div>
      <h1>{categoryName} News</h1>
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory}>
            <a href={`/category/${categoryName}/${subcategory}`}>
              {subcategory}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
