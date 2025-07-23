import React from "react";
import "../styles/home.scss";

// IMAGES
import banner from "../img/banner.png";

// ICONS
import { FaArrowDown, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <img
        src={banner}
        className="banner"
        alt="Image of a laptop running code, in an office"
      />

      <div className="intro">
        <h2>Hej, jeg er Tobias Skak Dichmann</h2>

        <p>Uddannet webudvikler med fokus på frontend</p>

        <a href="#projects">
          <button>Projekter</button>
        </a>
      </div>

      <a href="#about" className="arrow-down">
        <FaArrowDown />
      </a>

      <a
        href="https://www.linkedin.com/in/tobias-skak-dichmann-4a3116208"
        className="linkedin"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Home;
