import classes from "./Pages.module.css";
import Card from "../components/ui/Card";
import NumberOfClicksForm from "../components/forms/NumberOfClicksForm";
import ClickCounterCard from "./cards/ClickCounterCard";
import axios from "axios";
import SERVER_ENDPOINT from "../api";
import { useState } from "react";

function NumberOfClicks() {
  const [data, setData] = useState("");
  const [cardIsShown, setCardIsShown] = useState(false);

  function getClicksHandler(numberOfClicksData) {
    const payload = JSON.stringify(numberOfClicksData);
    axios
      .post(SERVER_ENDPOINT() + "/clicks/", payload)
      .then((response) => {
        DisplayCardHandler();
        setData(response.data);
        console.log(data);
      })
      .catch();
  }
  function DisplayCardHandler() {
    setCardIsShown(true);
  }
  return (
    <div>
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
        <NumberOfClicksForm onGetClicks={getClicksHandler} />
      </section>
    </Card>
    {cardIsShown && <ClickCounterCard clicks={data}/>}
    </div>
  );
}

export default NumberOfClicks;
