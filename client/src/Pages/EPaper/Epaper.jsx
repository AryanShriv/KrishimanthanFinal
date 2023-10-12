import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EPapers.css";
import { base_url } from "../../utils/common";

const PDFSection = () => {
  const [pdfsData, setPdfsData] = useState([]);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
    textDecoration: "none", // Remove underline
  };

  const fetchPdfs = async () => {
    try {
      const api = `${base_url}/news/pdf/list`;
      const response = await axios.get(api);
      setPdfsData(response.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  const openPdfInNewTab = (pdfUrl) => {
    const pdfApi = `${base_url}/pdf/${pdfUrl}`;
    window.open(pdfApi, "_blank");
  };

  return (
    <section className="pdf-section">
      <h2 className="section-title">E-Papers Krishimanthan</h2>
      <div className="pdf-list">
        {pdfsData.map((pdf, index) => (
          <div key={index} className="pdf-card">
            
              <iframe
                src={`${base_url}/pdf/${pdf.fileUrl}`}
                title={`PDF ${index + 1}`}
                className="pdf-iframe"
                width="100%"
                height="200px"
                alt="No Display"
                onLoad={() => setPdfLoaded(true)}
              />
            
            <br />
            <p className="pdf-button pointer">{pdf.fileName}</p>
            <p>Date: {pdf.newsDate}</p>
            <button
              onClick={() => openPdfInNewTab(pdf.fileUrl)}
              className="pdf-button pointer"
            >
              View Pdf
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PDFSection;
