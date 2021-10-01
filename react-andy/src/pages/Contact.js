import classes from "./Pages.module.css";

import ContactForm from "../components/forms/ContactForm";

function Contact() {
  return (
    <section>
      <h3
        className={classes.title}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Send us a Message
      </h3>
      <ContactForm />
    </section>
  );
}

export default Contact;
