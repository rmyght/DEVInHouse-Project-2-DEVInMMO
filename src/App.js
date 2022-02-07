import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes/Router';
import { Menu } from './Components/layout/Menu';
import { GlobalStyle } from './themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myDarkTheme, myMainTheme } from './themes/themes';
import { ChangeTheme } from './Components/ChangeTheme/ChangeTheme';
import { HorizontalLine } from './Components/HorizontalLine/HorizontalLine';
import { existsLS, setItemLS } from './Components/helper/utilLocalStorage';

function App() {
  const existsTheme = existsLS('theme');
  let actualTheme = 'main';
  if (!existsTheme) {
    setItemLS('theme', 'main');
  } else {
    actualTheme = existsTheme;
  };
  const [main, setMain] = useState(actualTheme);
  return (
    <ThemeProvider theme={main === 'main' ? myMainTheme : myDarkTheme}>
      <GlobalStyle />
      <Menu />
      <HorizontalLine />
      <ChangeTheme main={main} setMain={setMain} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;