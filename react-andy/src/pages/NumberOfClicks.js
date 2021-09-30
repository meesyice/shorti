import classes from "./Pages.module.css";

import Card from "../components/ui/Card";
import NumberOfClicksForm from "../components/forms/NumberOfClicksForm";

function NumberOfClicks() {
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
          URL Click Tracker
        </h1>
        <NumberOfClicksForm />
      </section>
    </Card>
  );
}

export default NumberOfClicks;
