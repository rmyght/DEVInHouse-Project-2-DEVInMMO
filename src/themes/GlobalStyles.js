import { createGlobalStyle } from 'styled-components';

// Tema Global, aplicado em toda página.

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    transition: color 0.3s ease-in-out, background-color 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.colors.bgcolor.main};
  }
`;
