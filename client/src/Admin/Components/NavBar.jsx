import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
 
  return (
   <>
        <Link to={"/gallery"} rel="noopener noreferrer" className="link-margin">
          Gallery
        </Link>

        <Link to={"/admin/category"} rel="noopener noreferrer" className="link-margin">
          Category
        </Link>

        <Link to={"/admin/subCategory"} rel="noopener noreferrer" className="link-margin">
          Sub Category
        </Link>

        <Link to={"/admin/pdf"} rel="noopener noreferrer" className="link-margin">
          Pdf
        </Link>
   </>
  );
};