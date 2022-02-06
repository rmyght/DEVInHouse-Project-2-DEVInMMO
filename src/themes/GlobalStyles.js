import { createGlobalStyle } from 'styled-components';

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
    background-color: ${({ theme }) => theme.colors.bgcolor.main};
  }
`;
