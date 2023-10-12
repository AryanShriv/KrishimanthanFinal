import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NatinalNews.css";
import Card from "../Card/Card";
import { base_url } from "../../utils/common";

const NationalNews = () => {
  const [newsLocal, setNewsLocal] = useState([]);

  useEffect(() => {
    const fetchLocalNews = async () => {
      try {
        const api = `${base_url}/news/name/राष्ट्रीय समाचार`;
        const localNews = await axios.get(api);
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

  // Limit the number of items to the first 6
  const limitedNews = newsLocal.slice(0, 6);

  return (
    <div className="LocalNews">
      <h2
        style={{ color: "white", backgroundColor: "purple", width: "50%" }}
        className="heading"
      >
        राष्ट्रीय समाचार
      </h2>

      <div className="cardContainer">
        {limitedNews.map((data) => (
          <Card
            name={data.name}
            description={
              <span style={{ color: "midnightblue"}}>
                {truncateDescription(data.description, 13)}
              </span>
            }
            image={data.image} // Adjust the word limit as needed
            newsId={data._id}
          />
        ))}
      </div>
    </div>
  );
};

export default NationalNews;
