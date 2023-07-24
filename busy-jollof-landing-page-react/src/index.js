import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './HomePage/Home';
import NavMenu from './NavMenu/NavMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenu />
    <Home />
  </React.StrictMode>
);


