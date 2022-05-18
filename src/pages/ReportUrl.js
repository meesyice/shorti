import classes from "./Pages.module.css";

import ReportUrlForm from "../components/forms/ReportUrlForm";

function ReportUrl() {
  return (
      <section>
        <h3
          className={classes.report}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Report a Malicious Shorti URL
        </h3>
        <ReportUrlForm />
      </section>
  );
}

export default ReportUrl;
