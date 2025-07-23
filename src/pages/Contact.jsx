import React, { useRef } from "react";
import "../styles/contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nwfyx0b", "template_4lolhm7", form.current, {
        publicKey: "IsoED0YOXNuDzgk5n",
      })
      .then(
        () => {
          console.log("Message Sent!");
          e.target.reset();
        },
        (error) => {
          console.log("Message couldn't send...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h3>Kontakt</h3>

      <div className="divider"></div>

      <p>
        Du er altid velkommen til at udfylde formularen, så vil jeg vende
        tilbage hurtigst muligt
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Navn</label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Skriv dit navn"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Skriv din email"
          required
        />
        <label htmlFor="message">Besked</label>
        <textarea
          name="message"
          id="message"
          placeholder="Skriv din besked"
          required
        />
        <input type="submit" value="Send" required />
      </form>
    </div>
  );
};

export default Contact;
