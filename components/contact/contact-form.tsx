import { useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";

type FormDetailsType = {
  email: string;
  name: string;
  message: string;
};

export default function ContactForm() {
  const [enteredDetails, setEnteredDetails] = useState<FormDetailsType>({
    email: "",
    name: "",
    message: "",
  });

  function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();

    const response = axios.get(`/api/contact`, {
      method: "POST",
    });
  }

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setEnteredDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredDetails.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredDetails.name}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredDetails.message}
            onChange={inputChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
