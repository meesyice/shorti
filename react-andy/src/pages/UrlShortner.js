import { useHistory } from 'react-router-dom'

import classes from "./Pages.module.css";
import UrlShortnerForm from "../components/forms/UrlShortnerForm";
import Card from "../components/ui/Card";
import axios from "axios";

function UrlShortner() {
  function ShortenUrlHandler(urlShortnerData) {
    const payload = JSON.stringify(urlShortnerData);
    axios.post("http://127.0.0.1:5000/shortener/", payload).then().catch();
  }
  
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
        <UrlShortnerForm onShortenUrl={ShortenUrlHandler} />
      </section>
    </Card>
  );
}

export default UrlShortner;
