import { Link } from "react-router-dom";

import classes from "./MobileFooter.module.css";

function MobileFooter() {
  return (
    <footer className={classes.Footer}>
      <div>
        <ul>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Privacy">Privacy</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Terms">Terms of Service</Link>
          </li>
        </ul>
        <div>© 2021 Shorti.xyz - Tool to shorten long URLs.</div>
        <div>
          Made with <span className={classes.heart}>&#10084;</span> in Amman
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;
