import React from "react";
import "../styles/projects.scss";

// IMAGES
import customizePlusSimonsenLaptop from "../img/projects/customize-plus-simonsen/customize-plus-simonsen_complete.png";
import studietøjLaptop from "../img/projects/studietøj/studietøj_complete.png";
import tuneItLaptop from "../img/projects/tune-it/tune-it_complete.png";

// ICONS
import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
  return (
    <div id="projects">
      <h3>Projekter</h3>

      <div className="divider"></div>

      <p>Her ser du de projekter, jeg har fået lavet igennem tiden</p>

      {/* Customize PLUS Simonsen */}
      <div className="project">
        <img
          src={customizePlusSimonsenLaptop}
          alt="Image of Customize PLUS Simonsen's website"
        />

        <div className="project-txt">
          <h4>Customize PLUS Simonsen</h4>

          <p>
            Jeg har været med til at vedligeholde denne hjemmeside for Customize
            PLUS Simonsen. Jeg har hovedsageligt opdateret deres produkter som
            vises på siden
          </p>

          <a href="https://c-ps.dk/" target="_blank">
            <button>
              Se siden her <TbExternalLink />
            </button>
          </a>
        </div>
      </div>

      {/* Studietøj */}
      <div className="project">
        <img src={studietøjLaptop} alt="Image of Studietøj's website" />

        <div className="project-txt">
          <h4>Studietøj</h4>

          <p>
            Jeg har været med som assisterende UX/UI designer på Studietøj.dk.
            Jeg har hovedsageligt hjulpet med bestillingsprocessen
          </p>

          <a href="https://studietoej.dk/" target="_blank">
            <button>
              Se siden her <TbExternalLink />
            </button>
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
            <button>
              Se siden her <TbExternalLink />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
