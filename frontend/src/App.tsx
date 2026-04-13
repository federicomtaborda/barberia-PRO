import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from './components/Toast';

// Screens
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
      <BottomNavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Protected Routes */}
        <Route 
          path="/seleccion" 
          element={<ProtectedRoute><SeleccionServicio /></ProtectedRoute>} 
        />
        <Route 
          path="/calendario" 
          element={<ProtectedRoute><Calendario /></ProtectedRoute>} 
        />
        <Route 
          path="/confirmacion" 
          element={<ProtectedRoute><Confirmacion /></ProtectedRoute>} 
        />
        <Route 
          path="/perfil" 
          element={<ProtectedRoute><Perfil /></ProtectedRoute>} 
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
