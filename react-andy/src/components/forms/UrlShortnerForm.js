import { useRef } from "react";

import classes from "./Form.module.css";

function UrlShortnerForm() {
  const urlInputRef = useRef();

  function UrlShortnerFormHandler(event) {
    event.preventDefault();
    const enteredUrl = urlInputRef.current.value;

    const UrlShortnerData = {
      url: enteredUrl,
    };

    console.log(UrlShortnerData)
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
