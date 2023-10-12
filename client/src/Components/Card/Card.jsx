import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";
import { website_url } from "../../utils/common";

const Card = (props) => {
 
  
  const {name, description, image, newsId} = props
  const newsDetailURL = `${website_url}/news/details/${newsId}`;
  return (
    <div className="card" key={name}>  
    <Link to={newsDetailURL} rel="noopener noreferrer" className="no-underline">
      <img src={image} alt="Loading" />
      <div className="news-content">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default Card
