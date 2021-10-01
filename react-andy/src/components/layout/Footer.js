import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div>
        <ul>
          <li>
            <Link to="/">URL Shortner</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/ClickTracker">URL Click Tracker</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/ReportUrl">Report Malicious URL</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Terms">Terms of Service</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Privacy">Privacy</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div>© 2021 Shorti.xyz - Tool to shorten long URLs.</div>
        <div>Made with <span className={classes.heart}>&#10084;</span> in Amman</div>
      </div>
    </footer>
  );
}

export default Footer;
