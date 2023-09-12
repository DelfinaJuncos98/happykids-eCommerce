import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './Pages/Catalogo/Catalogo.jsx';
import Inicio from './Pages/Inicio/Inicio.jsx';
import LayoutFunc from './Pages/Layout/layout';
import TablaDeTalles from './Pages/TablaDeTalles/TablaDeTalles.jsx';
import './style.scss';

const App = () => (
  <React.StrictMode>
    <Router>
      <LayoutFunc>
        <Routes>
          <Route path="/inicio" element={<Inicio/>} />
        </Routes>
        <Routes>
          <Route path="/catalogo" element={<Catalogo/>} />
        </Routes>
        <Routes>
          <Route path="/tabla-de-talles" element={<TablaDeTalles/>} />
        </Routes>
      </LayoutFunc>
    </Router>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);