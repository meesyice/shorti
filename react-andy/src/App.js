import { Route, Switch } from "react-router-dom";

import UrlShortner from "./pages/UrlShortner";
import NumberOfClicks from "./pages/NumberOfClicks";
import ReportUrl from "./pages/ReportUrl";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={UrlShortner} />
        <Route exact path="/ClickTracker" component={NumberOfClicks} />
        <Route exact path="/ReportUrl" component={ReportUrl} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default App;
