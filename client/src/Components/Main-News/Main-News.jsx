// src/Components/Main-News/Article.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main-News.css";
import { Link } from "react-router-dom";

import Sankalp from "../Sankalp/Sankalp";
import { base_url } from "../../utils/common";

const Article = () => {
  const [newsLocal, setNewsLocal] = useState({});

  useEffect(() => {
    const fetchLocalNews = async () => {
      try {
        const api = `${base_url}/latest/news`;
        const localNews = await axios.get(api);
        // console.log(localNews.data)
        setNewsLocal(localNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLocalNews();
  }, []);

  const newsDetailURL = `http://localhost:3000/news/details/${newsLocal._id}`;

  // Function to truncate description to a specified number of words
  const truncateDescription = (description, wordLimit) => {
    if (description) {
      // Check if description is defined
      const words = description.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + " ...";
      }
      return description;
    }
    return "";
  };

  return (
    <>
      <div className="article">
        <Link to={newsDetailURL} className="no-underline">
          <div className="image">
            <img src={newsLocal.image} alt="" />
          </div>
          <div className="text">
            <h2>{truncateDescription(newsLocal.name, 10)}</h2>
            <p>{truncateDescription(newsLocal.description, 50)}</p>
          </div>
        </Link>

        <button className="button no-underline">
          <Link to="/Sankalp" component={Sankalp}>
            {" "}
            आगे पढ़ें{" "}
          </Link>
        </button>
      </div>
    </>
  );
};

export default Article;
