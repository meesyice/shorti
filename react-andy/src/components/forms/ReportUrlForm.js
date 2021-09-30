import classes from "./Form.module.css";
import Card from "../ui/Card";

function ReportUrlForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="description">Invalid or malicious URL</label>
          <input
            type="text"
            required
            id="malicious-url"
            placeholder="shorti.xyz/abc123"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Comment</label>
          <textarea className={classes.textarea} id="Comment" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default ReportUrlForm;
