import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CrudAsesores from "../pages/Admin_asesores";
import AdminAsesores from "../pages/Admin_asesores";
import AdminDocumentos from "../pages/Admin_documentos";
import CardInfo from "../pages/estudiantes_docentes";
import DireccionDash from "../pages/Direccion";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/adminasesores" component={AdminAsesores} />
        <Route exact path="/admindocumentos" component={AdminDocumentos} />
        <Route exact path="/asesoresEstudiantes" component={CardInfo} />
        <Route exact path="/direccionDash" component={DireccionDash} />
      </Switch>
    </Router>
  );
};

export default AppRouter;