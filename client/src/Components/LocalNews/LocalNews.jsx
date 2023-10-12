import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LocalNews.css";
import Card from "../Card/Card";
import { base_url } from "../../utils/common";

const LocalNews = () => {
  const [newsLocal, setNewsLocal] = useState([]);

  useEffect(() => {
    const fetchLocalNews = async () => {
      try {
        const api = `${base_url}/news/name/प्रादेशिक समाचार`;
        const localNews = await axios.get(api);
        console.log(localNews.data);
        setNewsLocal(localNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLocalNews();
  }, []);

  // Function to truncate description to a specified number of words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return description;
  };

  // Limit the number of items to the first 4
  const limitedNews = newsLocal.slice(0, 6);

  return (
    <div className="LocalNews">
      <h2
        style={{ color: "yellow", backgroundColor: "purple", width: "50%" }}
        className="heading"
      >
        प्रादेशिक समाचार
      </h2>
      <div className="cardContainer">
        {limitedNews.map((data) => (
          <Card
            name={data.name}
            description={truncateDescription(data.description, 15)} // Adjust the word limit as needed
            image={data.image}
            newsId={data._id}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalNews;
