import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { OrderDetailScene, CheckoutScene } from "../../scenes";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  const { root, orderList, checkout } = switchRoutes;

  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[root, orderList]}
          component={OrderDetailScene}
        />
        <Route exact={true} path={checkout} component={CheckoutScene} />
      </Switch>
    </Router>
  );
};
