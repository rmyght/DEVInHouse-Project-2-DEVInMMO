import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes/Router';
import { Menu } from './Components/layout/Menu';
import { GlobalStyle } from './themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myDarkTheme, myMainTheme } from './themes/themes';
import { ChangeTheme } from './Components/ChangeTheme/ChangeTheme';

function App() {
  const [main, setMain] = useState(true);
  return (
    <ThemeProvider theme={main ? myMainTheme : myDarkTheme}>
      <GlobalStyle />
      <Menu />
      <hr style={{height: 5}} />
      <ChangeTheme main={main} setMain={setMain} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;