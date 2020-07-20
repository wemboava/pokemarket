import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Pokemon from "../pages/pokemon";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/chat" component={Pokemon} exact />
  </Switch>
);

export default Routes;
