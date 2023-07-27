import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavMenu from './NavMenu/NavMenu';
//import Footer from './Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavMenu />
    {/*  <Footer />   */}
  </React.StrictMode>
);


