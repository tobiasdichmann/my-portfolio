import React from "react";
import "../styles/footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <p>
        &#169; <span>{new Date().getFullYear()}</span>. {t('footer.made_by')}{" "}
        <a href="#about">Tobias Skak Dichmann</a>
      </p>
    </div>
  );
};

export default Footer;
