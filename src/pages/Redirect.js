import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import SERVER_ENDPOINT from "../api";
import axios from "axios";

function Redirect() {
  const history = useHistory();
  const [destination, setDestination] = useState("");
  const [error, setError] = useState();
  const shorti = history.location.pathname.toString();

  useEffect(() => {
    axios
    .get(SERVER_ENDPOINT() + "api/url" + shorti)
    .then((response) => {
      setDestination(response.data);
    })
    .catch((e) => {
      setError(e.message);
    });
  }, [shorti]);  

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);
  return <p>{error && JSON.stringify(error)}</p>;
}

export default Redirect;
