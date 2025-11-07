import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// ICONS
import { FaFileDownload } from "react-icons/fa";

const PagePDF = ({ rootElementId, downloadFileName }) => {
  const handleDownloadPdf = async () => {
    // 1. Get the HTML element you want to convert
    const input = document.getElementById(rootElementId);
    if (!input) {
      console.error(`Element with ID: ${rootElementId} not found.`);
      return;
    }

    // Optional: Add a brief loading/feedback state here

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
  };

  return (
    <button
      className="page-pdf-btn"
      onClick={handleDownloadPdf}
      title="Tager ca. 5 sek."
    >
      <FaFileDownload /> Download Website PDF <br />
      <i>Kun på PC</i>
    </button>
  );
};

export default PagePDF;
