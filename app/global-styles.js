import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: local('Lato'), ur;(./fonts/Lato-Regular.ttf) format('truetype');
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  body.fontLoaded {
    font-family: Lato, Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: linen;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
