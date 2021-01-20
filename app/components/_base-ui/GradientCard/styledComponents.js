import styled from 'styled-components';

import { appColorA, backgroundColor } from 'styleConstants';

export const CardContainer = styled.section`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 50%,
    ${backgroundColor} 100%
  );
  margin-top: 2.5rem;
  padding: 2.5rem 2.5rem 4rem;
  position: relative;
`;

export const Stripe = styled.div`
  background-color: ${appColorA};
  height: 0.6rem;
  left: 0;
  margin-bottom: 2rem;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const StyledH2 = styled.h2`
  margin: 0;
`;

export const SummaryTitleContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  & svg {
    margin-right: 1.8rem;
  }
`;
