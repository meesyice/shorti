import { useRef } from "react";

import classes from "./Form.module.css";
import Card from "../cards/Card";

function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function ContactFormHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const contactData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    console.log(contactData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={ContactFormHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.textarea}
            required
            id="message"
            ref={messageInputRef}
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
