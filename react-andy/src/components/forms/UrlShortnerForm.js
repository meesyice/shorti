import classes from "./Form.module.css";

function UrlShortnerForm() {
  return (
    //<InputBar />
    <form className={classes.form}>
      <div className={classes.control}>
        <input
          type="text"
          required
          id="url"
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
