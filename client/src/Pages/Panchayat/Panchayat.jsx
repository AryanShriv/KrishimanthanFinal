import React, { useEffect, useState } from "react";
import "./Panchayat.css";
import axios from "axios";
import { base_url, website_url } from "../../utils/common";
import { Link } from "react-router-dom";

function Panchayat() {
  const [PanchayatData, setPanchayatData] = useState([]);
  const [PanchayatDataSubCategoryData, setPanchayatDataSubCategoryData] =
    useState([]);
  const [
    PanchayatDataSubCategoryGroupData,
    setPanchayatDataSubCategoryGroupData,
  ] = useState([]);

  const fetchNews = async () => {
    try {
      const categoryName = "पंचायत";
      let categoryId = await axios.get(
        `${base_url}/category/name/${categoryName}`
      );
      categoryId = categoryId.data._id;

      const api = `${base_url}/news/category/${categoryId}`;
      const PanchayatDataDatas = await axios.get(api);
      setPanchayatData(PanchayatDataDatas.data);

      const PanchayatDataSubCategoryData = await axios.get(
        `${base_url}/subCategory/${categoryId}`
      );
      setPanchayatDataSubCategoryData(PanchayatDataSubCategoryData.data);

      const PanchayatDataGroupSubCategoryData = await axios.get(
        `${base_url}/news/subcategory/group/category/${categoryId}`
      );
      setPanchayatDataSubCategoryGroupData(
        PanchayatDataGroupSubCategoryData.data
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Function to truncate description to a specified number of words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return description;
  };

  return (
    <>
      <div className="heading">
        <p>पंचायत</p>
      </div>
      <div className="MainCardContainer">
        {PanchayatData.map((card, index) => (
          <div className="MainCard" key={index}>
            <Link
              to={`${website_url}/news/details/${card._id}`}
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="ImgHeading">
                <div className="CardImage">
                  <img src={card.image} alt="loading" />
                </div>

                <div className="card-content">
                  <div className="CardHeading">
                    <h5>{card.name}</h5>
                  </div>

                  <div className="description">
                    <p>{truncateDescription(card.description, 13)}</p>
                    <button>
                      <Link
                        to={`${website_url}/news/details/${card._id}`}
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        आगे पढ़ें
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* National News */}

      <div className="LocalNewsKrishi">
        {PanchayatDataSubCategoryGroupData.map((data) => (
          <div id={data.subCategoryName}>
            <h2 className="heading">{data.subCategoryName}</h2>
            <div className="cardContainer">
              {data.records.map((data) => (
                <div className="card" key={data.title}>
                  <Link
                    to={`${website_url}/news/details/${data._id}`}
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <img src={data.image} alt="Loading" />
                    <div className="card-content">
                      <h5>{data.name}</h5>
                      <p>{truncateDescription(data.description, 13)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Section Navigation */}

      <div className="section-navigation">
        <h2 className="heading">इस पृष्ठ पर</h2>
        <ul>
          {PanchayatDataSubCategoryData.map((data) => (
            <li>
              <a href={`#${data.name}`}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Panchayat;