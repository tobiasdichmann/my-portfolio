import React from "react";
import "../styles/education.scss";

// IMAGES
import cLaCoursSkole from "../img/education/la-cours.png";
import fkDistribution from "../img/work/fk-distribution.png";
import randersFreja from "../img/work/randers-freja.png";
import fitnessWorld from "../img/work/fitness-world.png";
import djursSommerland from "../img/work/djurs-sommerland.png";
import himmerlandsUngdomsskole from "../img/education/h-u.png";
import aarhusTech from "../img/education/aarhus-tech.png";
import videnDjurs from "../img/education/viden-djurs.png";
import customizePlusSimonsen from '../img/work/customize-plus-simonsen.png';

const Education = () => {
  return (
    <div id="education">
      <h3>Uddannelse & Erfaring</h3>

      <div className="divider"></div>

      <p>Her er et lille indblik i min rejse mod at blive webudvikler</p>

      <div className="timeline">
        {/* C. la Cours Skole */}
        <div className="container left">
          <img src={cLaCoursSkole} alt="C. la Cours Skole's Logo" />
          <div className="content">
            <h4>C. la Cours Skole, Randers</h4>
            <h5>August 2009 - Juni 2019</h5>
            <p>
              <b>Grundskolen</b>
              <br />
              Hele grundskolen fra 0.-9. klasse gik jeg på{" "}
              <i>C. la Cours Skole</i> - en privatskole i Randers.
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* FK Distribution */}
        <div className="container right">
          <img src={fkDistribution} alt="FK Distribution's Logo" />
          <div className="content work">
            <h4>FK Distribution, Randers</h4>
            <h5>April 2016 - Marts 2018</h5>
            <p>
              <b>Reklameomdeler</b>
              <br />
              <ul>
                <li>Første indblik på arbejdsmarkedet</li>
                <li>2-3 timer om ugen</li>
                <li>Selvstændighed</li>
                <li>Lære at udførre en tildelt opgave</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Randers Freja Atletik */}
        <div className="container left">
          <img src={randersFreja} alt="Randers Freja Atletik's Logo" />
          <div className="content work">
            <h4>Randers Freja Atletik, Randers</h4>
            <h5>August 2017 - Juni 2019</h5>
            <p>
              <b>Frivillig atletiktræner</b>
              <br />
              <ul>
                <li>Træning af børn i alderen 6-9 år</li>
                <li>1,5 time om ugen</li>
                <li>Ansvar for andre</li>
                <li>Kontakt med børn</li>
              </ul>
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Fitness World */}
        <div className="container right">
          <img src={fitnessWorld} alt="Fitness World's Logo" />
          <div className="content work">
            <h4>Fitness World, Randers</h4>
            <h5>August 2018 - Juni 2019</h5>
            <p>
              <b>Børnepasser</b>
              <br />
              <ul>
                <li>Pasning af børn 2 timer om ugen</li>
                <li>Kontakt med børn</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Djurs Sommerland */}
        <div className="container left">
          <img src={djursSommerland} alt="Djurs Sommerland's Logo" />
          <div className="content work">
            <h4>Djurs Sommerland, Nimtofte</h4>
            <h5>Maj 2019 - Oktober 2021</h5>
            <p>
              <b>Sæsonansat</b>
              <br />
              <ul>
                <li>Tilberedning- og servering af Fast Food</li>
                <li>Bemanding af kasse</li>
                <li>Kontakt- og servicemindet overfor kunder</li>
              </ul>
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
          <div className="content">
            <h4>Himmerlands Ungdomsskole, Aars</h4>
            <h5>August 2019 - Juni 2020</h5>
            <p>
              <b>Efterskole</b>
              <br />
              Efter grundskolen valgte jeg at tage 10. klasse på en efterskole
              for at prøve noget nyt, møde nogle nye mennesker og måske også
              blive lidt mere selvsikker. Desværre blev det sidste halve år lidt
              spoleret, da covid-19 kom til, men det var stadig en fantastisk
              oplevelse.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Aarhus Tech, Grundforløb 1 */}
        <div className="container left">
          <img src={aarhusTech} alt="Aarhus Tech's Logo" />
          <div className="content">
            <h4>Aarhus Tech, Viby J</h4>
            <h5>August 2020 - Januar 2021</h5>
            <p>
              <b>Grundforløb 1 | IT, Medie & Teknologi</b>
              <br />
              Efter efterskolen startede jeg på min ungdomsuddannelse. <br />
              Jeg startede ud på Grundforløb 1 af webudvikler-uddannelsen på{" "}
              <i>Aarhus Tech</i>. <br />
              Grundforløb 1 var ikke så målrettet webudvikling, men var noget,
              jeg skulle igennem, da jeg kom direkte fra grundskole/efterskole.{" "}
              <br />
              Jeg lærte dog stadig noget om design og teamwork, som jeg så kunne
              tage med mig videre.
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Aarhus Tech, Grundforløb 2 */}
        <div className="container right">
          <img src={aarhusTech} alt="Aarhus Tech's Logo" />
          <div className="content">
            <h4>Aarhus Tech, Aarhus N</h4>
            <h5>Januar 2021 - Juni 2021</h5>
            <p>
              <b>Grundforløb 2 | Webudvikler</b>
              <br />
              Grundforløb 2 foregik også på <i>Aarhus Tech</i>, men dog i en af
              deres andre afdelinger. <br />
              Her var forløbet rettet mere mod webudvikling, og her lærte jeg at
              lave hjemmesider.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        {/* Viden Djurs */}
        <div className="container left">
          <img src={videnDjurs} alt="Viden Djurs's Logo" />
          <div className="content">
            <h4>Viden Djurs, Grenaa</h4>
            <h5>August 2021 - Oktober 2022</h5>
            <p>
              <b>Hovedforløbet | WebIT Grenaa</b>
              <br />
              Da jeg blev færdig med grundforløbet, var det ikke muligt at
              fortsætte med hovedforløbet på <i>Aarhus Tech</i>. <br />
              Derfor endte jeg med at læse hovedforløbet på <i>Viden Djurs</i> i
              Grenaa. <br />
              Inden da startede jeg sammen med en studiekammerat på
              hovedforløbet i Aalborg, men vi skiftede hurtigt til Grenaa, da vi
              ikke syntes, undervisningen var god nok. <br />
              Det viste sig at være en rigtig god beslutning at tage til{" "}
              <i>Viden Djurs</i>, og jeg sluttede uddannelsen af med et rigtig
              godt resultat.
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>

        {/* Customize PLUS Simonsen */}
        <div className="container right">
          <img src={customizePlusSimonsen} alt="FK Distribution's Logo" />
          <div className="content work">
            <h4>Customize PLUS Simonsen, Randers</h4>
            <h5>April 2025 - Juli 2025</h5>
            <p>
              <b>Praktikforløb</b>
              <br />
              <ul>
                <li>Opdatering af produktliste</li>
                <li>Opdatering / Vedligeholdelse af hjemmeside</li>
              </ul>
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
