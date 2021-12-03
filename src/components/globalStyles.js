import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  };
  .App {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  .sticky-thc{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  h1, h2, h3, h4, h5, h6, p, li{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  .svg {
    filter: ${({ theme }) => theme.svgFilter}
  }
  	`;
