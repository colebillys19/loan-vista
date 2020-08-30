import styled from 'styled-components';

export const SpinnerContainer = styled.section`
  padding-top: 5.2rem;
  text-align: center;
`;

export const AnimationWrapper = styled.span`
  animation: spin 1.1s linear infinite;
  display: inline-block;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
