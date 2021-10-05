import classes from "./Pages.module.css";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/forms/ContactForm";

function Contact() {
  return (
    <Layout>
      <section>
        <h3
          className={classes.report}
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
    </Layout>
  );
}

export default Contact;
