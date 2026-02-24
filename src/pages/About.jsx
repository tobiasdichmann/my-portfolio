import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div id='about'>
      <h3>Om Mig</h3>

      <div className='divider'></div>

      <p>Her kan du finde lidt information om, hvem jeg er, og hvad jeg kan</p>

      <div className='about-content'>
        <div className='about-txt'>
          <h4>Hvem er jeg?</h4>

          <p>
            Jeg er <b>uddannet webudvikler</b> med fokus på <b>frontend</b>.
            <br />
            Jeg koder hovedsageligt i <b>React.js</b> og med <b>SCSS</b> til
            styling. I min fritid kan jeg godt lide at være sammen med mine{" "}
            <b>venner</b>, spille <b>trommer</b> og ellers bare slappe af foran{" "}
            <b>computeren</b>
          </p>

          <a href='#contact'>
            <button>Kontakt</button>
          </a>
        </div>

        <div className='skills-content'>
          <h4>Jeg har erfaring med:</h4>

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
