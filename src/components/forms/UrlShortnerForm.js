import { useRef } from "react";
import classes from "./Form.module.css";

function UrlShortnerForm(props) {
  const urlInputRef = useRef();

  function UrlShortnerFormHandler(event) {
    event.preventDefault();
    const enteredUrl = urlInputRef.current.value;
    const urlShortnerData = {
      url: enteredUrl,
    };
    props.onShortenUrl(urlShortnerData);
  }
  return (
    //<InputBar />
    <form className={classes.form} onSubmit={UrlShortnerFormHandler}>
      <div className={classes.control}>
        <input
          type="text"
          required
          id="url"
          ref={urlInputRef}
          placeholder="Enter the link here"
        />
      </div>
      <div className={classes.actions}>
        <button>Shorten URL</button>
      </div>
    </form>
  );
}

export default UrlShortnerForm;
