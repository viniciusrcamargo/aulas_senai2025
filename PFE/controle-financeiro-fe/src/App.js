import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/pages/Login";
import Register from "./componentes/pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registrar" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
