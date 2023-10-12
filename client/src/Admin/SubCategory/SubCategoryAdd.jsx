import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./SubCategoryAdd.css";
import { base_url } from "../../utils/common";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/NavBar";

export const SubCategoryAdd = () => {
  const toast = useToast();
  const [category, setCategory] = useState([]);

  const [formState, setFormState] = useState({
    name: "",
    category_id: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleCategoryChange = (e) => {
  //   const { value } = e.target;
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     category: value,
  //   }));
  // };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${base_url}/subCategory/`, formState)
      .then((res) => {
        toast({
          title: "SubCategory Added Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setFormState({
          name: "",
          category_id: ""
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error adding SubCategory.",
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
        <h1>Add Sub Category</h1>
        <form className="news-form" onSubmit={handleSubmit}>  
           <div className="form-group">
            <label htmlFor="category_id">Category:</label>
            <select
              id="category_id"
              name="category_id"
              value={formState.category_id}
              onChange={handleInputChange}
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
            <label htmlFor="image">SubCategory Name:</label>
            <input
              type="text"
              id="image"
              name="name"
              value={formState.name}
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