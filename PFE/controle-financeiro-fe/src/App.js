import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./componentes/pages/Login";
import Register from "./componentes/pages/Register";
import Dashboard from "./componentes/pages/Dashboard";
import AdicionarMovimentacao from "./componentes/pages/Movimentacoes/Adicionar";
import RelatorioMovimentacoes from "./componentes/pages/Movimentacoes/Relatorio";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addmovimentacao" element={<AdicionarMovimentacao/>} />
        <Route path="/relatoriomovimentacao" element={<RelatorioMovimentacoes/>} />
      </Routes>
    </Router>
  );
}

export default App;
