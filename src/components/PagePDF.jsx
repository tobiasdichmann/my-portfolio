import React, { useState } from "react";
import "../styles/loader.scss";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// COMPONENTS
import Loader from "./Loader";

// ICONS
import { FaFileDownload } from "react-icons/fa";

const PagePDF = ({ rootElementId, downloadFileName }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    setIsGenerating(true); // 👈 Show the loader
    console.log("Loading started. isGenerating:", true); // 👈 Add this line
    // 1. Get the HTML element you want to convert
    const input = document.getElementById(rootElementId);
    if (!input) {
      console.error(`Element with ID: ${rootElementId} not found.`);
      return;
    }

    // 2. Convert the HTML element to a canvas image
    const canvas = await html2canvas(input, {
      // UseScale: To improve quality, especially on high-DPI screens (like the one on your OnePlus Open).
      scale: 2,
      logging: false, // Suppress console logging
    });

    // 3. Get the image data and dimensions
    const imgData = canvas.toDataURL("image/png");

    // Calculate PDF dimensions based on the canvas dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // 4. Initialize the PDF document (A4 size, 'mm' units)
    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    // 5. Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Handle pages longer than A4 (multi-page PDF)
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // 6. Save the PDF file
    pdf.save(downloadFileName);

    setIsGenerating(false); // 👈 Hide the loader when done
    console.log("Loading ended. isGenerating:", false); // 👈 Add this line
  };

  return (
    <>
      <button className="page-pdf-btn" onClick={handleDownloadPdf}>
        {isGenerating ? (
          <Loader isLoading={true} />
        ) : (
          <FaFileDownload className="download-logo" />
        )}
        <div>
          <p>Download Website PDF</p>
          <i>Kun på PC</i>
        </div>
      </button>
    </>
  );
};

export default PagePDF;
