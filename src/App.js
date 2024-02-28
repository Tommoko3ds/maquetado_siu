import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminAsesores from "./pages/admin_asesores";


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AdminAsesores/>} />
      </Routes>
    </Router>
  );
}
