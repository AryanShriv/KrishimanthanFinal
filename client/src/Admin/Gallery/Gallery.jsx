import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./Gallery.css";
import { base_url } from "../../utils/common";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/NavBar";

export const Gallery = () => {
  const toast = useToast();
  const [galleryList, setGallery] = useState({});

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const api = `${base_url}/gallery`;
        const response = await axios.get(api);
        const galleryData = response.data;
        
        // If there is gallery data, populate the formState
     
          const firstGallery = galleryData; // Assuming you want the first gallery
          setFormState({
            image1: firstGallery.image1 || "",
            image2: firstGallery.image2 || "",
            image3: firstGallery.image3 || "",
            image4: firstGallery.image4 || "",
            image5: firstGallery.image5 || "",
            image1Text: firstGallery.image1Text || "",
            image2Text: firstGallery.image2Text || "",
            image3Text: firstGallery.image3Text || "",
            image4Text: firstGallery.image4Text || "",
            image5Text: firstGallery.image5Text || "",
          });
        
        setGallery(galleryData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGalleryData();
  }, []);
  
  const [formState, setFormState] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image1Text: "",
    image2Text: "",
    image3Text: "",
    image4Text: "",
    image5Text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${base_url}/gallery`, formState)
      .then((res) => {
        toast({
          title: "Gallery Added Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setFormState({
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          image5: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error adding gallery.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <div className="admin-center">
      <div className="admin-container">
        <NavBar />
        <h1>Gallery Image</h1>
        <form className="news-form" onSubmit={handleSubmit}>       
          <div className="form-group">
            <label htmlFor="image">Image 1 URL:</label>
            <input
              type="text"
              id="image"
              name="image1"
              value={formState.image1}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image 2 URL:</label>
            <input
              type="text"
              id="image"
              name="image2"
              value={formState.image2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image3">Image 3 URL:</label>
            <input
              type="text"
              id="image"
              name="image3"
              value={formState.image3}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image4">Image 4 URL:</label>
            <input
              type="text"
              id="image"
              name="image4"
              value={formState.image4}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image5">Image 5 URL:</label>
            <input
              type="text"
              id="image"
              name="image5"
              value={formState.image5}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image5">Image 1 Text:</label>
            <input
              type="text"
              id="image"
              name="image1Text"
              value={formState.image1Text}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image5">Image 2 Text:</label>
            <input
              type="text"
              id="image"
              name="image2Text"
              value={formState.image2Text}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image5">Image 3 Text:</label>
            <input
              type="text"
              id="image"
              name="image3Text"
              value={formState.image3Text}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image5">Image 4 Text:</label>
            <input
              type="text"
              id="image"
              name="image4Text"
              value={formState.image4Text}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image5">Image 5 Text:</label>
            <input
              type="text"
              id="image"
              name="image5Text"
              value={formState.image5Text}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};