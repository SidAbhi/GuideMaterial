import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LogoPlacement, Nav } from "./components/Nav";
import ScrollToTop from "./ScrollToTop.js";

const Routes = () => {
  const Main = React.lazy(() => import('./Main'));
  const SAPA = React.lazy(() => import('./SAPA'));
  const Construction = React.lazy(() => import('./Construction'));
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <ScrollToTop />
      <LogoPlacement />
      <Nav />
      <Switch>
        <Suspense fallback={<div className = "loading">Loading...</div>}>
          <Route exact path="/" component={Main} />
          <Route exact path="/sapa" component={SAPA} />
          <Route exact path="/strengths" component={Construction} />
          <Route exact path="/personality" component={Construction} />
          <Route exact path="/learn" component={Construction} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;