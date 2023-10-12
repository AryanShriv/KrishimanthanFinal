import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Krishi from "./Pages/Krishi/Krishi";
import Sehkarita from "./Pages/Sehkarita/Sehkarita";
import Pashupalan from "./Pages/Pashupalan/Pashupalan";
import Panchayat from "./Pages/Panchayat/Panchayat";
import Van from "./Pages/Van/Van";
import Epaper from "./Pages/EPaper/Epaper";
import Sankalp from "./Components/Sankalp/Sankalp";

import {Admin} from "./Admin/Admin/Admin"
import {Login} from "./Admin/Login/Login"

import Category from "./Components/Category";
import Subcategory from "./Components/Subcategory";
import NewsDetail from "./Components/NewsDetail";
import { Gallery } from "./Admin/Gallery/Gallery";
import NewsDetails from "./Pages/News/NewsDetails";
import { SubCategoryAdd } from "./Admin/SubCategory/SubCategoryAdd";
import { CategoryAdd } from "./Admin/Category/CategoryAdd";
import { PdfUpload } from "./Admin/PdfUpload/PdfUpload";
import ContactUs from "./Pages/ContactUs/ContactUs";
// this is

function App() {
  return (
    <Router>
      <Navbar />
      {/* <BelowBar/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/category" element={<CategoryAdd />} />
        <Route exact path="/admin/subCategory" element={<SubCategoryAdd />} />
        <Route exact path="/admin/pdf" element={<PdfUpload />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <div className="center">
        <Routes>
          <Route exact path="/news/details/:newsId" element={<NewsDetails />} />
          <Route exact path="/Krishi" element={<Krishi cat={"Krishi"} />} />
          <Route exact path="/Sehkarita" element={<Sehkarita />} />
          <Route exact path="/Pashupalan" element={<Pashupalan />} />
          <Route exact path="/Panchayat" element={<Panchayat />} />
          <Route exact path="/Van" element={<Van />} />
          <Route exact path="/Epaper" element={<Epaper />} />
          <Route exact path="/Sankalp" element={<Sankalp />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route path="/category/:categoryName" exact component={Category} />
          <Route
            path="/category/:categoryName/:subcategoryName"
            exact
            component={Subcategory}
          />
          <Route path="/news/:newsId" component={NewsDetail} />
          {/* Other routes */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
