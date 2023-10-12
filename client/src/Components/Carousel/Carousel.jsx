
import { base_url, website_url } from "../../utils/common";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import slider1 from "../../Assets/Swiper/slider1.jpg";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {

const [newsData, setNewsData] = useState([]);

const fetchNews = async () => {
  try {
    const api = `${base_url}`;
    const newsData = await axios.get(api);
    setNewsData(newsData.data);

  } catch (err) {
    console.log(err);
  }
};

  // Truncate description to 100 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 100) {
      return words.slice(0, 100).join(" ") + " ...";
    }
    return description;
  };

useEffect(() => {
  fetchNews();
}, []);

const slidesData = [
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  // Add more slide data here
];

  return (
    <div className="carousel-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Add Autoplay module
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
        className="mySwiper"
      >
        {newsData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt="" />
              <div className="color-overlay"></div>
              <div className="slider-text">
                <h1 style={{fontSize:14}}>{slide.name}</h1>
                <p style={{color: 'white'}}>{truncateDescription(slide.description)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
