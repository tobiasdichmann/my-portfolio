import React, { useState } from "react";
import "../styles/navbar.scss";
import { useTranslation } from "react-i18next";

// IMAGES
import myPortrait from "../img/my-portrait.jpg";

// ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Burger menu
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "da" ? "en" : "da";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className='desktop-menu'>
        <a href='#home'>
          <div className='logo'>
            <img src={myPortrait} alt='Picture of me' />
            <h2>Tobias Skak Dichmann</h2>
          </div>
        </a>

        <ul>
          <li>
            <a href='#about'>{t("navbar.about")}</a>
          </li>
          <li>
            <a href='#projects'>{t("navbar.projects")}</a>
          </li>
          <li>
            <a href='#certificates'>{t("navbar.certificates")}</a>
          </li>
          <li>
            <a href='#education'>{t("navbar.education")}</a>
          </li>
          <li>
            <a href='#contact'>{t("navbar.contact")}</a>
          </li>
          <li>
            <button className='lang-toggle' onClick={toggleLanguage}>
              {t("navbar.lang_toggle")}
            </button>
          </li>
        </ul>

        <a className='burger-icon' onClick={toggleBurger}>
          <GiHamburgerMenu />
        </a>
      </nav>

      <div className={`burger-menu ${isActive ? "active" : ""}`}>
        <ul>
          <a className='cross-icon' onClick={toggleBurger}>
            <CgClose />
          </a>

          <li>
            <a href='#about' onClick={toggleBurger}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href='#projects' onClick={toggleBurger}>
              {t("navbar.projects")}
            </a>
          </li>
          <li>
            <a href='#certificates' onClick={toggleBurger}>
              {t("navbar.certificates")}
            </a>
          </li>
          <li>
            <a href='#education' onClick={toggleBurger}>
              {t("navbar.education")}
            </a>
          </li>
          <li>
            <a href='#contact' onClick={toggleBurger}>
              {t("navbar.contact")}
            </a>
          </li>

          <li>
            <button
              className='lang-toggle-mobile'
              onClick={() => {
                toggleLanguage();
                toggleBurger();
              }}
            >
              {t("navbar.lang_toggle")}
            </button>
          </li>

          <li>
            <a
              href='https://github.com/tobiasdichmann'
              className='github'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/tobias-skak-dichmann-4a3116208'
              className='linkedin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
