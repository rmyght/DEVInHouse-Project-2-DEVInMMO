// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes/Router';
import { Menu } from './Components/Layout/Menu';

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;