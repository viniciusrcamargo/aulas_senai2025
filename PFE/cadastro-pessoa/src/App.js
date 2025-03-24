import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Formulario from './componentes/formulario';
import BoasVindas from './componentes/BoasVindas';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Formulario />}/>
          <Route path='/success' element={<BoasVindas />}/>
        </Routes>
      </Router>
      
  );
}

export default App;
