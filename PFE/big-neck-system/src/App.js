import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './componentes/formulario';
import BoasVindas from './componentes/boasvindas';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/success" element={<BoasVindas />} />
      </Routes>
    </Router>
  );
}

export default App;