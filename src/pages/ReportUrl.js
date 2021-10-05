import classes from "./Pages.module.css";

import ReportUrlForm from "../components/forms/ReportUrlForm";
import Layout from "../components/layout/Layout";

function ReportUrl() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default ReportUrl;
