import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./Admin.css";
import { Link } from "react-router-dom";
import { base_url } from "../../utils/common";
import { NavBar } from "../Components/NavBar";

export const Admin = () => {
  const toast = useToast();

  const [formState, setFormState] = useState({
    name: "",
    image: "",
    description: "",
    category_id: "",
    subcategory_id: "",
  });

  const [category, setCategory] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subcategories, setSubcategories] = useState([]); // State for subcategory options

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const api = `${base_url}/category/`;
        const response = await axios.get(api);
        const galleryData = response.data;
        
        setCategory(galleryData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    const fetchSubCategoryData = async () => {
      try {
        // Fetch subcategories based on the selected category_id
        const api = `${base_url}/subCategory/${formState.category_id}`;
        const response = await axios.get(api);
        const subCategoryData = response.data;
        setSubcategories(subCategoryData); 
        setSubCategoryData(subCategoryData); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchSubCategoryData();
  }, [formState.category_id]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    const selectedCategory = category.find((categoryGroup) => categoryGroup._id === value);
    console.log(selectedCategory,"selectedCategoryselectedCategory")
    setFormState((prevState) => ({
      ...prevState,
      category_id: value,
      // Select the first subcategory for the new category
      subcategory_id: selectedCategory?.subcategories?._id || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form State:", formState);
    axios
      .post(`${base_url}/post`, formState)
      .then((res) => {
        toast({
          title: "News Added Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setFormState({
          name: "",
          image: "",
          description: "",
          category_id: "",
          subcategory_id: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error adding news.",
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
      
        <h1>Krishi Manthan</h1>
        <form className="news-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formState.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category_id">Category:</label>
            <select
              id="category_id"
              name="category_id"
              value={formState.category_id}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Category</option>
                {category.map((categoryGroup) => (
                  <option key={categoryGroup.name} value={categoryGroup._id}>
                    {categoryGroup.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subcategory">Subcategory:</label>
            <select
              id="subcategory"
              name="subcategory_id"
              value={formState.subcategory_id}
              onChange={handleInputChange}
              required
            >
                <option value="">Select Sub Category</option>
                {subCategoryData.map((subCategoryGroup) => (
                  <option key={subCategoryGroup._id} value={subCategoryGroup._id}>
                    {subCategoryGroup.name}
                  </option>
                ))}
            </select>
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};