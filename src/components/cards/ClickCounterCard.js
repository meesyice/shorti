import Card from "./Card";
import classes from "./Cards.module.css";

function ClickCounterCard(props) {
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
          Your Shorti URL Was Clicked:
        </h1>
        <h1
          className={classes}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            {props.clicks} Times
        </h1>
      </section>
    </Card>
  );
}

export default ClickCounterCard;
