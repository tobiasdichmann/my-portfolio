import React from "react";
import "../styles/certificates.scss";
import { useTranslation } from "react-i18next";

// IMAGES
import googleAICertificateBadge from "../img/certificates/google-ai-professional-certificate.png";

// Certificates
import googleAICertificate from "../img/certificates/google-ai-professional-certificate.pdf";

// ICONS
import { GoArrowUpRight } from "react-icons/go";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <div id='certificates'>
      <h3>{t('certificates.title')}</h3>

      <div className='divider'></div>

      <p>{t('certificates.description')}</p>

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
            <h4>{t('certificates.google_ai.title')}</h4>
            <p>{t('certificates.google_ai.date')}</p>
            <button>
              <a
                href={googleAICertificate}
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('certificates.see_cert')} <GoArrowUpRight />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
