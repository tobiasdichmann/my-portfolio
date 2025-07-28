import React from "react";
import "../styles/projects.scss";

// IMAGES
import tuneItLaptop from "../img/projects/tune-it/tune-it_complete.png";
import customizePlusSimonsenLaptop from "../img/projects/customize-plus-simonsen/customize-plus-simonsen_complete.png";

const Projects = () => {
  return (
    <div id="projects">
      <h3>Projekter</h3>

      <div className="divider"></div>

      <p>Her ser du de projekter, jeg har lavet for andre</p>

      {/* Customize PLUS Simonsen */}
      <div className="project">
        <img
          src={customizePlusSimonsenLaptop}
          alt="Image of Tune It's website"
        />

        <div className="project-txt">
          <h4>Customize PLUS Simonsen</h4>

          <p>
            Jeg har alene vedligeholdt denne hjemmeside for Customize PLUS
            Simonsen, da jeg var i et praktikforløb hos dem.
          </p>

          <a href="https://c-ps.dk/" target="_blank">
            <button>Se siden her</button>
          </a>
        </div>
      </div>

      {/* Tune It */}
      <div className="project">
        <img src={tuneItLaptop} alt="Image of Tune It's website" />

        <div className="project-txt">
          <h4>Tune It</h4>

          <p>
            Jeg har lavet denne hjemmeside for det randrusianske a cappella-kor
            Tune It
          </p>

          <a href="https://www.tune-it.dk/" target="_blank">
            <button>Se siden her</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
