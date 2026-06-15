import React from "react";
import "../styles/about.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about'>
      <h3>{t('about.title')}</h3>

      <div className='divider'></div>

      <p>{t('about.description')}</p>

      <div className='about-content'>
        <div className='about-txt'>
          <h4>{t('about.who_am_i')}</h4>

          <p dangerouslySetInnerHTML={{ __html: t('about.intro_html') }}></p>

          <a href='#contact'>
            <button>{t('about.contact')}</button>
          </a>
        </div>

        <div className='skills-content'>
          <h4>{t('about.skills')}</h4>

          <div className='skills'>
            <div>HTML</div>
            <div>CSS / SCSS</div>
            <div>Bootstrap / Tailwind CSS</div>
            <div>JavaScript</div>
            <div>React.js</div>
            <div>EmailJS</div>
            <div>GitHub</div>
            <div>FileZilla</div>
            <div>TinyPNG</div>
            <div>VS Code / Antigravity</div>
            <div>Shopify</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
