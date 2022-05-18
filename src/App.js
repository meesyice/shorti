import { Route, Switch } from "react-router-dom";

import UrlShortner from "./pages/UrlShortner";
import NumberOfClicks from "./pages/NumberOfClicks";
import ReportUrl from "./pages/ReportUrl";
import Contact from "./pages/Contact";
import Redirect from "./pages/Redirect";
import Privacy from "./pages/extra/Privacy";
import Terms from "./pages/extra/Terms";
import MainLayout from "./components/layout/Layout" ;


function App() {
  return (
      <Switch>
        <RouteWrapper exact path="/" component={UrlShortner} layout={MainLayout}/>
        <RouteWrapper exact path="/home" component={UrlShortner} layout={MainLayout}/>
        <RouteWrapper exact path="/ClickTracker" component={NumberOfClicks} layout={MainLayout}/>
        <RouteWrapper exact path="/ReportUrl" component={ReportUrl} layout={MainLayout}/>
        <RouteWrapper exact path="/Contact" component={Contact} layout={MainLayout}/>
        <RouteWrapper exact path="/Privacy" component={Privacy} layout={MainLayout}/>
        <RouteWrapper exact path="/Terms" component={Terms} layout={MainLayout}/>
        <Route exact path="/:shorti" component={Redirect} />
      </Switch>
  );
}

function RouteWrapper({
  component : Component,
  layout : Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default App;
