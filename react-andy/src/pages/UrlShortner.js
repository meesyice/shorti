import classes from "./Pages.module.css";
import UrlShortnerForm from "../components/forms/UrlShortnerForm";
import ShortUrlCard from "./cards/ShortUrlCard";
import Card from "../components/ui/Card";
import Layout from "../components/layout/Layout";
import axios from "axios";
import SERVER_ENDPOINT from "../api";
import { useState } from "react";

function UrlShortner() {
  const [data, setData] = useState("");
  const [cardIsShown, setCardIsShown] = useState(false);
  function ShortenUrlHandler(urlShortnerData) {
    const payload = JSON.stringify(urlShortnerData);
    axios
      .post(SERVER_ENDPOINT() + "/shortener/", payload)
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
    <Layout>
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
              URL Shortner
            </h1>
            <UrlShortnerForm onShortenUrl={ShortenUrlHandler} />
          </section>
        </Card>
        {cardIsShown && <ShortUrlCard shorti={data} />}
      </div>
    </Layout>
  );
}

export default UrlShortner;
