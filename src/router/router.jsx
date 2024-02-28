import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CrudAsesores from "../pages/admin_asesores";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CrudAsesores} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
