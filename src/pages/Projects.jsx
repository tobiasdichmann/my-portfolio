import React from "react";
import "../styles/projects.scss";
import { useTranslation } from "react-i18next";

// IMAGES
import customizePlusSimonsen from "../img/projects/customize-plus-simonsen.png";
import studietoej from "../img/projects/studietoej.png";
import tuneIt from "../img/projects/tune-it.png";

// ICONS
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id='projects'>
      <h3>{t('projects.title')}</h3>

      <div className='divider'></div>

      <p>{t('projects.description')}</p>

      <div className='projects'>
        {/* Customize Plus Simonsen */}
        <div className='project'>
          <div className='project-img'>
            <img src={customizePlusSimonsen} alt='Customize Plus Simonsen' />
          </div>

          <div className='project-info'>
            <h4>{t('projects.customize_plus.title')}</h4>
            <p>{t('projects.customize_plus.tech')}</p>
            <a
              href='https://c-ps.dk/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
            >
              {t('projects.see_site')} <GoArrowUpRight />
            </a>
          </div>
        </div>

        {/* Studietøj */}
        <div className='project'>
          <div className='project-img'>
            <img src={studietoej} alt='Studietoej' />
          </div>

          <div className='project-info'>
            <h4>{t('projects.studietoej.title')}</h4>
            <p>{t('projects.studietoej.tech')}</p>
            <a
              href='https://studietoej.dk/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
            >
              {t('projects.see_site')} <GoArrowUpRight />
            </a>
          </div>
        </div>

        {/* Tune It */}
        <div className='project'>
          <div className='project-img'>
            <img src={tuneIt} alt='Tune It' />
          </div>

          <div className='project-info'>
            <h4>{t('projects.tune_it.title')}</h4>
            <p>{t('projects.tune_it.tech')}</p>
            <a
              href='https://www.tune-it.dk/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
            >
              {t('projects.see_site')} <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
