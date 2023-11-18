import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";
import Notification from "../ui/notification";

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

  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState<unknown>();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  async function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      const response = await axios.post("/api/contact", {
        details: enteredDetails,
      });

      if (!response.data.ok) {
        throw new Error(response.data.message || "Something went wrong");
      }
      setRequestStatus("success");
      setEnteredDetails({ email: "", name: "", message: "" });
    } catch (error: unknown) {
      setRequestError(error);
      setRequestStatus("error");
    }
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

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

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
            required
            value={enteredDetails.message}
            onChange={inputChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
