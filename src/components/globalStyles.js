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
  .sticky-thc {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

  }
  h1, h2, h3, h4, h5, h6, p, li, a {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  };
   .anchor {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  };
  .svg {
    filter: ${({ theme }) => theme.svgFilter}
  }
  .divider{
    fill: ${({ theme }) => theme.dividerFill}
  }
  .decorative{
    fill: ${({ theme }) => theme.decorativeFill}
  }
  .svg-link{
    fill: ${({ theme }) => theme.svgLinkFill}
  }
  .dev-link-icon{
    color: ${({ theme }) => theme.text} !important;
  }
  	`;
