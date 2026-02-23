import React, { useState } from "react";
import "../styles/navbar.scss";

// IMAGES
import myPortrait from "../img/my-portrait.jpg";

// ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  // Burger menu
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
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
            <a href='#about'>Om</a>
          </li>
          <li>
            <a href='#projects'>Projekter</a>
          </li>
          <li>
            <a href='#education'>Uddannelse & Erfaring</a>
          </li>
          <li>
            <a href='#contact'>Kontakt</a>
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
            <a href='#about'>Om</a>
          </li>
          <li>
            <a href='#projects'>Projekter</a>
          </li>
          <li>
            <a href='#education'>Uddannelse & Erfaring</a>
          </li>
          <li>
            <a href='#contact'>Kontakt</a>
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
