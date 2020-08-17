import { createGlobalStyle } from 'styled-components';

import { appBackgroundColor, appTextColorA } from 'styleConstants';

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
    overflow-y: scroll;
  }

  #app {
    background-color: ${appBackgroundColor};
    color: ${appTextColorA};
    font-family: Arial, sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
