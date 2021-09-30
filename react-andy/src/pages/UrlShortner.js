import classes from "./Pages.module.css";

import UrlShortnerForm from "../components/forms/UrlShortnerForm";
import Card from "../components/ui/Card";

function UrlShortner() {
  return (
    <Card>
      <section>
        <h1
          className={classes.title}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          URL Shortner
        </h1>
        <UrlShortnerForm />
      </section>
    </Card>
  );
}

export default UrlShortner;
