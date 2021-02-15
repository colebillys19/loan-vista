import { css } from 'styled-components';

export const appColorA = 'rgb(80, 103, 55)';
export const appColorAOpaque = 'rgba(80, 103, 55, 0.5)';
export const appColorB = 'rgb(255, 191, 0)';
export const appColorBOpaque = 'rgb(255, 191, 0, 0.5)';

export const iconColorA = 'rgba(255, 191, 0, 0.5)';
export const iconColorB = 'rgba(80, 103, 55, 0.5)';
export const iconColorC = 'rgb(80, 103, 55)';

export const textColorA = 'rgb(17, 17, 17)';
export const textColorB = 'rgb(136, 136, 136)';

export const backgroundColor = 'rgb(248, 248, 255)';
export const borderGrey = 'rgb(204, 204, 204)';
export const errorColor = 'rgb(244, 67, 54)';
export const skeletonGrey = 'rgb(232, 232, 232)';

export const loadingAnimation = css`
  -webkit-animation: Webkit 2s ease infinite;
  -moz-animation: Moz 2s ease infinite;
  animation: Standard 2s ease infinite;

  @-webkit-keyframes Webkit {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @-moz-keyframes Moz {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @keyframes Standard {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;
