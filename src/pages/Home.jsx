import React from "react";
import "../styles/home.scss";
import { useTranslation } from "react-i18next";

// IMAGES
import heroDesktop from "../img/hero_desktop.jpg";
import heroResponsive from "../img/hero_responsive.jpg";

// ICONS
import { FaArrowDown, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();

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
        <h2>{t('home.title')}</h2>

        <p>{t('home.subtitle')}</p>

        <a href="#projects">
          <button>{t('home.projects')}</button>
        </a>
      </div>

      <a href="#about" className="arrow-down">
        <FaArrowDown />
      </a>

      <div className="socials">
        <a
          href="https://github.com/tobiasdichmann"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tobias-skak-dichmann-4a3116208"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Home;
