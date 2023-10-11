import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './Pages/Catalogo/Catalogo.jsx';
import DetalleCatalogo from './Pages/DetalleCatalogo/DetalleCatalogo.jsx';
import Inicio from './Pages/Inicio/Inicio.jsx';
import LayoutFunc from './Pages/Layout/layout';
import TablaDeTalles from './Pages/TablaDeTalles/TablaDeTalles.jsx';
import './style.scss';
import Categorias from './Pages/Categorias/Categorias.jsx';

const App = () => (
  <React.StrictMode>
    <Router>
      <LayoutFunc>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/catalogo/:id" element={<Catalogo />} />
          <Route path="/tabla-de-talles" element={<TablaDeTalles />} />
          <Route path="/detalle-catalogo/:id" element={<DetalleCatalogo />} />
        </Routes>
      </LayoutFunc>
    </Router>
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('root')).render(<App />);