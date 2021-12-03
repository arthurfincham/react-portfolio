import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: (${({ theme }) => theme.background}) !important;
    color: ${({ theme }) => theme.text} !important;
  };
  .App{
    background-color: (${({ theme }) => theme.background});
    color: ${({ theme }) => theme.text};
  }
  .sticky-thc{
    background-color: (${({ theme }) => theme.background});
    color: ${({ theme }) => theme.text};
  }
  	`;
