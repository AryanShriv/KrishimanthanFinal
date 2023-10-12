import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./NewsDetails.css";
import { base_url } from "../../utils/common";

function NewsDetails( ) {
  const { newsId } = useParams();
  const [newsDetails, setNewsDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  useEffect(() => {
    const fetchLocalNews = async() => {
     try{
      const api = `${base_url}/news/${newsId}`;
      const response = await axios.get(api)
      setNewsDetails(response.data)
     }
     catch(err){
      console.log(err)
     }
    }
    fetchLocalNews();
  },[])

  // console.log(newsDetails)
  return (
    <>

      <div className="heading">
        <p>समाचार</p>
      </div>
      <div className="MainCardContainer">
          <div className="MainCard">
            <div className="ImgHeading">
              <div className="CardImage">
                <img src={newsDetails.image} alt="loading" />
              </div>

              <div className="CardHeading">
                <h5>{newsDetails.name}</h5>
              </div>
            </div>
            <div className="description">
              <p>{newsDetails.description}</p>
              <button>
                {/* <a href="/" role="button" onClick={(e) => e.preventDefault()}>
                और भी 
                </a> */}
                <Link to="/">
                  और भी
                </Link>
              </button>
            </div>
          </div>
      </div>    
    </>
  );
}

export default NewsDetails;