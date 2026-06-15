import React, { useRef, useState } from "react";
import "../styles/contact.scss";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    // Custom Validation
    const nameInput = form.current.elements["user_name"];
    const emailInput = form.current.elements["user_email"];
    const messageInput = form.current.elements["message"];

    if (
      nameInput.validity.valueMissing ||
      emailInput.validity.valueMissing ||
      messageInput.validity.valueMissing
    ) {
      setStatusMessage(t('contact.error_required'));
      setIsError(true);
      return;
    }

    if (emailInput.validity.typeMismatch) {
      setStatusMessage(t('contact.error_email'));
      setIsError(true);
      return;
    }

    setStatusMessage(t('contact.sending'));
    setIsError(false);

    emailjs
      .sendForm("service_g190qiv", "template_4lolhm7", form.current, {
        publicKey: "IsoED0YOXNuDzgk5n",
      })
      .then(
        () => {
          setStatusMessage(t('contact.success'));
          setIsError(false);
          e.target.reset();

          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        },
        (error) => {
          console.log("Message couldn't send...", error.text);
          setStatusMessage(t('contact.error_send'));
          setIsError(true);
        },
      );
  };

  return (
    <div id='contact'>
      <h3>{t('contact.title')}</h3>

      <div className='divider'></div>

      <p>{t('contact.description')}</p>

      <form ref={form} onSubmit={sendEmail} noValidate>
        <label htmlFor='name'>
          {t('contact.name')} <span className='required'>*</span>
        </label>
        <input
          type='text'
          name='user_name'
          id='name'
          placeholder={t('contact.placeholder_name')}
          required
        />
        <label htmlFor='email'>
          {t('contact.email')} <span className='required'>*</span>
        </label>
        <input
          type='email'
          name='user_email'
          id='email'
          placeholder={t('contact.placeholder_email')}
          required
        />
        <label htmlFor='message'>
          {t('contact.message')} <span className='required'>*</span>
        </label>
        <textarea
          name='message'
          id='message'
          placeholder={t('contact.placeholder_message')}
          required
        />
        <input type='submit' value={t('contact.send')} />

        {statusMessage && (
          <div className={`status-message ${isError ? "error" : "success"}`}>
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
