import { createGlobalStyle } from 'styled-components';

import { backgroundColor, textColorA } from 'styleConstants';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${backgroundColor};
    overflow-y: scroll;
  }

  #app {
    color: ${textColorA};
    font-family: Arial, sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
