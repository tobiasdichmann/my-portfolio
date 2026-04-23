import React from "react";
import "../styles/projects.scss";

// IMAGES
import customizePlusSimonsen from "../img/projects/customize-plus-simonsen.png";
import studietoej from "../img/projects/studietoej.png";
import tuneIt from "../img/projects/tune-it.png";

// ICONS
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <div id='projects'>
      <h3>Projekter</h3>

      <div className='divider'></div>

      <p>Her ser du de projekter, jeg har fået lavet igennem tiden</p>

      <div className='projects'>
        {/* Customize Plus Simonsen */}
        <div className='project'>
          <div className='project-img'>
            <img src={customizePlusSimonsen} alt='Customize Plus Simonsen' />
          </div>

          <div className='project-info'>
            <h4>Customize Plus Simonsen</h4>
            <p>Shopify, HTML, CSS</p>
            <button>
              <a
                href='https://c-ps.dk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Se siden <GoArrowUpRight />
              </a>
            </button>
          </div>
        </div>

        {/* Studietøj */}
        <div className='project'>
          <div className='project-img'>
            <img src={studietoej} alt='Studietoej' />
          </div>

          <div className='project-info'>
            <h4>Studietøj</h4>
            <p>UI/UX</p>
            <button>
              <a
                href='https://studietoej.dk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Se siden <GoArrowUpRight />
              </a>
            </button>
          </div>
        </div>

        {/* Tune It */}
        <div className='project'>
          <div className='project-img'>
            <img src={tuneIt} alt='Tune It' />
          </div>

          <div className='project-info'>
            <h4>Tune It</h4>
            <p>React, HTML, SCSS, JavaScript</p>
            <button>
              <a
                href='https://www.tune-it.dk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Se siden <GoArrowUpRight />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
