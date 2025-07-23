import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        &#169; <span>{new Date().getFullYear()}</span>. Lavet af{" "}
        <a href="#about">Tobias Skak Dichmann</a>
      </p>
    </div>
  );
};

export default Footer;
