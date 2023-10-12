import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./CategoryAdd.css";
import { base_url } from "../../utils/common";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/NavBar";

export const CategoryAdd = () => {
  const toast = useToast();

  const [formState, setFormState] = useState({
    name: ""
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
      .post(`${base_url}/category/`, formState)
      .then((res) => {
        toast({
          title: "Category Added Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setFormState({
          name: ""
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error adding Category.",
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

        <h1>Add Category</h1>
        <form className="news-form" onSubmit={handleSubmit}>       
          <div className="form-group">
            <label htmlFor="image">Category Name:</label>
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