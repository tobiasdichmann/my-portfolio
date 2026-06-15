import React from "react";
import "../styles/education.scss";
import { useTranslation } from "react-i18next";

// IMAGES
import cLaCoursSkole from "../img/education/la-cours.png";
import fkDistribution from "../img/work/fk-distribution.png";
import randersFreja from "../img/work/randers-freja.png";
import fitnessWorld from "../img/work/fitness-world.png";
import djursSommerland from "../img/work/djurs-sommerland.png";
import himmerlandsUngdomsskole from "../img/education/h-u.png";
import aarhusTech from "../img/education/aarhus-tech.png";
import videnDjurs from "../img/education/viden-djurs.png";
import customizePlusSimonsen from "../img/work/customize-plus-simonsen.png";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div id="education">
      <h3>{t('education.title')}</h3>

      <div className="divider"></div>

      <p>{t('education.description')}</p>

      <div className="timeline">
        {/* Customize PLUS Simonsen */}
        <div className="container right">
          <img src={customizePlusSimonsen} alt="FK Distribution's Logo" />
          <div className="content">
            <h4>{t('education.customize_plus.title')}</h4>
            <h5>{t('education.customize_plus.date')}</h5>
            <p>
              <b>{t('education.customize_plus.type')}</b>
              <br />
              <ul>
                <li>{t('education.customize_plus.l1')}</li>
                <li>{t('education.customize_plus.l2')}</li>
                <li>{t('education.customize_plus.l3')}</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Viden Djurs */}
        <div className="container left">
          <img src={videnDjurs} alt="Viden Djurs's Logo" />
          <div className="content education">
            <h4>{t('education.viden_djurs.title')}</h4>
            <h5>{t('education.viden_djurs.date')}</h5>
            <p>
              <b>{t('education.viden_djurs.type')}</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: t('education.viden_djurs.desc_html') }}></span>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Aarhus Tech, Grundforløb 2 */}
        <div className="container right">
          <img src={aarhusTech} alt="Aarhus Tech's Logo" />
          <div className="content education">
            <h4>{t('education.aarhus_tech_gf2.title')}</h4>
            <h5>{t('education.aarhus_tech_gf2.date')}</h5>
            <p>
              <b>{t('education.aarhus_tech_gf2.type')}</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: t('education.aarhus_tech_gf2.desc_html') }}></span>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Aarhus Tech, Grundforløb 1 */}
        <div className="container left">
          <img src={aarhusTech} alt="Aarhus Tech's Logo" />
          <div className="content education">
            <h4>{t('education.aarhus_tech_gf1.title')}</h4>
            <h5>{t('education.aarhus_tech_gf1.date')}</h5>
            <p>
              <b>{t('education.aarhus_tech_gf1.type')}</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: t('education.aarhus_tech_gf1.desc_html') }}></span>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Himmerlands Ungdomsskole */}
        <div className="container right">
          <img
            src={himmerlandsUngdomsskole}
            alt="Himmerlands Ungdomsskole's Logo"
          />
          <div className="content education">
            <h4>{t('education.himmerlands.title')}</h4>
            <h5>{t('education.himmerlands.date')}</h5>
            <p>
              <b>{t('education.himmerlands.type')}</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: t('education.himmerlands.desc_html') }}></span>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Djurs Sommerland */}
        <div className="container left">
          <img src={djursSommerland} alt="Djurs Sommerland's Logo" />
          <div className="content">
            <h4>{t('education.djurs.title')}</h4>
            <h5>{t('education.djurs.date')}</h5>
            <p>
              <b>{t('education.djurs.type')}</b>
              <br />
              <ul>
                <li>{t('education.djurs.l1')}</li>
                <li>{t('education.djurs.l2')}</li>
                <li>{t('education.djurs.l3')}</li>
              </ul>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Fitness World */}
        <div className="container right">
          <img src={fitnessWorld} alt="Fitness World's Logo" />
          <div className="content">
            <h4>{t('education.fitness.title')}</h4>
            <h5>{t('education.fitness.date')}</h5>
            <p>
              <b>{t('education.fitness.type')}</b>
              <br />
              <ul>
                <li>{t('education.fitness.l1')}</li>
                <li>{t('education.fitness.l2')}</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Randers Freja Atletik */}
        <div className="container left">
          <img src={randersFreja} alt="Randers Freja Atletik's Logo" />
          <div className="content">
            <h4>{t('education.randers_freja.title')}</h4>
            <h5>{t('education.randers_freja.date')}</h5>
            <p>
              <b>{t('education.randers_freja.type')}</b>
              <br />
              <ul>
                <li>{t('education.randers_freja.l1')}</li>
                <li>{t('education.randers_freja.l2')}</li>
                <li>{t('education.randers_freja.l3')}</li>
                <li>{t('education.randers_freja.l4')}</li>
              </ul>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* FK Distribution */}
        <div className="container right">
          <img src={fkDistribution} alt="FK Distribution's Logo" />
          <div className="content">
            <h4>{t('education.fk_dist.title')}</h4>
            <h5>{t('education.fk_dist.date')}</h5>
            <p>
              <b>{t('education.fk_dist.type')}</b>
              <br />
              <ul>
                <li>{t('education.fk_dist.l1')}</li>
                <li>{t('education.fk_dist.l2')}</li>
                <li>{t('education.fk_dist.l3')}</li>
                <li>{t('education.fk_dist.l4')}</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* C. la Cours Skole */}
        <div className="container left">
          <img src={cLaCoursSkole} alt="C. la Cours Skole's Logo" />
          <div className="content education">
            <h4>{t('education.la_cours.title')}</h4>
            <h5>{t('education.la_cours.date')}</h5>
            <p>
              <b>{t('education.la_cours.type')}</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: t('education.la_cours.desc_html') }}></span>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
