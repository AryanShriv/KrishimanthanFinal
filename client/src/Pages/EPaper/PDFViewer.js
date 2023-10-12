import React from "react";
import "./PDFViewer.css";

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div className="pdf-viewer">
      <iframe src={pdfUrl} title="PDF Viewer" />
    </div>
  );
};

export default PDFViewer;
