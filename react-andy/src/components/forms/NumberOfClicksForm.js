import classes from "./Form.module.css";

function NumberOfClicks() {
    return (
        <form className={classes.form}>
          <div className={classes.control}>
            <input
              type="text"
              required
              id="shorti-url"
              placeholder="shorti.xyz/abc123"
            />
          </div>
          <div className={classes.actions}>
            <button>Track Clicks</button>
          </div>
        </form>
      );
}

export default NumberOfClicks;