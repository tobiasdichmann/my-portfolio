import React from "react";
import "../styles/home.scss";

// IMAGES
import heroDesktop from "../img/hero_desktop.jpg";
import heroResponsive from "../img/hero_responsive.jpg";

// ICONS
import { FaArrowDown, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <img
        src={heroDesktop}
        className="hero-desktop"
        alt="Image of a laptop running code, in an office"
      />

      <img
        src={heroResponsive}
        className="hero-responsive"
        alt="Image of a pc running code, in an office"
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
