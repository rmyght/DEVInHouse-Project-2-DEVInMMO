import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
  }

  html {
    font-size: 16px;
    color: #333;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    background-color: #fefefc;
  }
`;
