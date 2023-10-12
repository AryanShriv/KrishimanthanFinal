import React, { useEffect, useState } from "react";
import axios from "axios";
// import img1 from "../../Assets/Swiper/adv.jpg";
import { base_url } from "../../utils/common";

import "./Adv.css";
const Adv = () => {

  const [galleryList, setGallery] = useState({});

  useEffect(() => {
    const fetchLocalNews = async() => {
     try{
      const api = `${base_url}/gallery`;
      const galleryData = await axios.get(api)
      setGallery(galleryData.data)
     }
     catch(err){
      console.log(err)
     }
    }
    fetchLocalNews();
  },[])

  return (
    <>
      <div className="advertise">
        <img src={galleryList.image4} alt="error" />
        <p>{galleryList.image4Text}</p>
      </div>
    </>
  );
};

export default Adv;
