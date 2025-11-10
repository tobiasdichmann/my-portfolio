import React from "react";
import "../styles/loader.scss";

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null; // Don't render anything if not loading
  }

  return (
    <div className="loader-container">
      <div className="loader-pulse"></div>
    </div>
  );
};

export default Loader;
