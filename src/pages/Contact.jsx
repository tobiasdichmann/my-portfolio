import React, { useRef, useState } from "react";
import "../styles/contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
      setStatusMessage("Udfyld venligst alle påkrævede felter.");
      setIsError(true);
      return;
    }

    if (emailInput.validity.typeMismatch) {
      setStatusMessage("Udfyld venligst en gyldig email.");
      setIsError(true);
      return;
    }

    setStatusMessage("Sender besked...");
    setIsError(false);

    emailjs
      .sendForm("service_g190qiv", "template_4lolhm7", form.current, {
        publicKey: "IsoED0YOXNuDzgk5n",
      })
      .then(
        () => {
          setStatusMessage(
            "Din besked er sendt! Jeg vender tilbage hurtigst muligt.",
          );
          setIsError(false);
          e.target.reset();

          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        },
        (error) => {
          console.log("Message couldn't send...", error.text);
          setStatusMessage("Der opstod en fejl. Prøv venligst igen senere.");
          setIsError(true);
        },
      );
  };

  return (
    <div id='contact'>
      <h3>Kontakt</h3>

      <div className='divider'></div>

      <p>
        Du er altid velkommen til at udfylde formularen, så vil jeg vende
        tilbage hurtigst muligt. hello world!
      </p>

      <form ref={form} onSubmit={sendEmail} noValidate>
        <label htmlFor='name'>
          Navn <span className='required'>*</span>
        </label>
        <input
          type='text'
          name='user_name'
          id='name'
          placeholder='Skriv dit navn'
          required
        />
        <label htmlFor='email'>
          Email <span className='required'>*</span>
        </label>
        <input
          type='email'
          name='user_email'
          id='email'
          placeholder='Skriv din email'
          required
        />
        <label htmlFor='message'>
          Besked <span className='required'>*</span>
        </label>
        <textarea
          name='message'
          id='message'
          placeholder='Skriv din besked'
          required
        />
        <input type='submit' value='Send' />

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
