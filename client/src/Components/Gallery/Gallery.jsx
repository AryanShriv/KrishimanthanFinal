import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../utils/common";

import "./Gallery.css";
const Gallery = () => {
  const [galleryList, setGallery] = useState({});

  useEffect(() => {
    const fetchLocalNews = async () => {
      try {
        const api = `${base_url}/gallery`;
        const galleryData = await axios.get(api);
        setGallery(galleryData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLocalNews();
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="heading">
          <h1>गेलरी</h1>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-md-4">
              <img
                src={galleryList.image1}
                alt="error"
                style={{ maxWidth: "none" }}
              />
              <p>{galleryList.image1Text}</p>
            </div>
            <div className="col-md-4">
              <img
                src={galleryList.image2}
                alt="error"
                style={{ maxWidth: "none" }}
              />
              <p>{galleryList.image2Text}</p>
            </div>
            <div className="col-md-4">
              <img
                src={galleryList.image3}
                alt="error"
                style={{ maxWidth: "none" }}
              />
              <p>{galleryList.image3Text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
