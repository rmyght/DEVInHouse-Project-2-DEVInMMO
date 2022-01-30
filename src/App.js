import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes/Router';
import { Menu } from './Components/layout/Menu';
import { GlobalStyle } from './themes/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;