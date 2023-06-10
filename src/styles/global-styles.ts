import  { createGlobalStyle } from './styled-components';

export const GlobalStyles =  createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.defaultFont};
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

