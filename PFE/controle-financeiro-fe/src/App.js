import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./componentes/pages/Login";
import Register from "./componentes/pages/Register";
import Dashboard from "./componentes/pages/Dashboard";
import AdicionarMovimentacao from "./componentes/pages/Movimentacoes/Adicionar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registrar" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addmovimentacao" element={<AdicionarMovimentacao/>} />
      </Routes>
    </Router>
  );
}

export default App;
