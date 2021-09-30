import classes from "./Pages.module.css";

import ReportUrlForm from "../components/forms/ReportUrlForm";

function ReportUrl() {
  return (
    <section>
      <h1
        className={classes.title}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Report a Malicious Shorti URL
      </h1>
      <ReportUrlForm />
    </section>
  );
}

export default ReportUrl;
