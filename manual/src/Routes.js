import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";
import { Nav } from "./Nav";


const Routes = () => {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;