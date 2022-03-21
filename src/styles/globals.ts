import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Lato', sans-serif;
    background: #f4faff;
  }
  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

`;

export default GlobalStyles;
