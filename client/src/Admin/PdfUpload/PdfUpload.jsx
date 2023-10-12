import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./PdfUpload.css";
import { base_url } from "../../utils/common";
import { NavBar } from "../Components/NavBar";

export const PdfUpload = () => {
  const toast = useToast();

  const [pdfFile, setPdfFile] = useState(null);
  const [fileName, setFileName] = useState(""); 
  const [newsDate, setNewsDate] = useState(""); 
  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleNewsDateChange = (e) => {
    setNewsDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!pdfFile) {
      toast({
        title: "Please select a PDF file.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const formData = new FormData();
    formData.append("pdfFile", pdfFile);
    formData.append("fileName", fileName); 
    formData.append("newsDate", newsDate); 
    axios
      .post(`${base_url}/news/pdf`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Response from server:", res.data); // Log the response
        alert("PDF Uploaded Successfully.")
        toast({
          title: "PDF Uploaded Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        
        // Reset the file input field after a successful upload
      setPdfFile(null);
      setFileName("");
      setNewsDate("");
      // Reset the input element value
      document.getElementById("image").value = "";
      
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
        <h1>Upload Pdf</h1>
        <form className="news-form" onSubmit={handleSubmit}>       
          <div className="form-group">
          <label htmlFor="image">File Name:</label>
            <input
             type="text"
             id="image"
             name="fileName"
             value={fileName} 
             onChange={handleFileNameChange}
             required
            />  
            <label htmlFor="image">New Date:</label>
            <input
             type="date"
             id="image"
             name="newsDate"
             value={newsDate} 
             onChange={handleNewsDateChange}
             required
            />
            <label htmlFor="image">Upload File:</label>
            <input
              type="file"
              id="image"
              name="pdfFile"
              accept=".pdf"
              onChange={handleFileChange}
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