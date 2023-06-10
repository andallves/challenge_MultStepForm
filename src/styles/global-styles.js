import  { createGlobalStyle } from 'styled-components';

interface GlobalStylesProp {
  default: string;
}

export const GlobalStyles =  createGlobalStyle<GlobalStylesProp>`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
`;
