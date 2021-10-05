import Card from "../../components/ui/Card";
import classes from "./Cards.module.css";

function InvalidUrlCard() {
  return (
    <Card>
      <section className={classes.Card}>
        <h1
          className={classes.title}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          The URL is not valid
        </h1>
      </section>
    </Card>
  );
}

export default InvalidUrlCard;
