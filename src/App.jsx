import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Import all screens (these will be generated next)
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Registro from './screens/Registro';
import SeleccionServicio from './screens/SeleccionServicio';
import Calendario from './screens/Calendario';
import Perfil from './screens/Perfil';
import Portfolio from './screens/Portfolio';
import Confirmacion from './screens/Confirmacion';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/seleccion" element={<SeleccionServicio />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
