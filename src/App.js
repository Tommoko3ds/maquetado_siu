import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Importa el componente App que hemos estado trabajando
import AdminAsesores from "../src/componentes/pages/Admin_asesores";
import NavBar from "./componentes/pages/Header";
import Sidebar from "./componentes/pages/Sidebar";
import CardInfo from "./componentes/pages/estudiantes_docentes";
import AdminDocumentos from "./componentes/pages/Admin_documentos";
import DireccionDash from "./componentes/pages/Direccion";


const AppRouter = () => {
  return (
    <Router>
    
      <Routes>
        <Route exact path="/adminasesores" element={<AdminAsesores />} />
        <Route exact path="/admindocumentos" element={<AdminDocumentos />} />
        <Route exact path="/asesoresEstudiantes" element={<CardInfo />} />
        <Route exact path="/direccionDash" element={<DireccionDash />} />
        <Route exact path="/" element={<App />} /> {/* Agrega esta línea para el componente App */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
