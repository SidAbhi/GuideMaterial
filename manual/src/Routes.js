import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LogoPlacement, Nav } from "./components/Nav";


const Routes = () => {
  const Main = React.lazy(() => import('./Main'));
  const SAPA = React.lazy(() => import('./SAPA'));
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <LogoPlacement />
      <Nav />
      <Switch>
        <Suspense fallback={<div className = "loading">Loading...</div>}>
          <Route exact path="/" component={Main} />
          <Route exact path="/sapa" component={SAPA} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;