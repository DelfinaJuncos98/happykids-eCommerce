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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3LhiPEwVu8NCyExDj8km_VZCe04qcCAs",
    authDomain: "verde-kids.firebaseapp.com",
    databaseURL: "https://verde-kids-default-rtdb.firebaseio.com",
    projectId: "verde-kids",
    storageBucket: "verde-kids.appspot.com",
    messagingSenderId: "489358571894",
    appId: "1:489358571894:web:193052f02325296eb66257",
    measurementId: "G-8ZG06TTVMS"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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