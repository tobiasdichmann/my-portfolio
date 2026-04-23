import React from "react";
import "../styles/certificates.scss";

// IMAGES
import googleAICertificateBadge from "../img/certificates/google-ai-professional-certificate.png";

// Certificates
import googleAICertificate from "../img/certificates/google-ai-professional-certificate.pdf";

// ICONS
import { GoArrowUpRight } from "react-icons/go";

const Certificates = () => {
  return (
    <div id='certificates'>
      <h3>Certifikater</h3>

      <div className='divider'></div>

      <p>Her kan du se mine opnåede certifikater og badges</p>

      <div className='certificates'>
        {/* Google AI Professional */}
        <div className='certificate'>
          <div className='certificate-img'>
            <div className='placeholder-img'>
              <img
                src={googleAICertificateBadge}
                alt='Google AI Professional Certificate'
              />
            </div>
          </div>

          <div className='certificate-info'>
            <h4>Google AI Professional</h4>
            <p>Coursera, 2026</p>
            <button>
              <a
                href={googleAICertificate}
                target='_blank'
                rel='noopener noreferrer'
              >
                Se bevis <GoArrowUpRight />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
