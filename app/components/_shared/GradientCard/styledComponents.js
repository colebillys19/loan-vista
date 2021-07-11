import styled from 'styled-components';

import { backgroundColor, borderGrey } from 'styleConstants';

export const CardContainer = styled.section`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #ffffff 50%,
    ${backgroundColor} 100%
  );
  margin-top: 2.5rem;
  padding: 2.5rem 2.5rem
    ${({ reduceBottomPadding }) => (reduceBottomPadding ? '1.5rem' : '4rem')};
  position: relative;
`;

export const StyledH2 = styled.h2`
  margin: 0 2rem 0 0;
`;

export const SummaryTitleContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  & svg {
    margin-left: ${({ noIcon }) => (noIcon ? '-0.2rem' : '0')};
    margin-right: ${({ noIcon }) => (noIcon ? '0.6rem' : '1.8rem')};
  }
`;

export const ThinStripe = styled.div`
  background-color: ${borderGrey};
  flex-grow: 1;
  height: 0.1rem;
`;

export const TopStripe = styled.div`
  background-color: ${({ color }) => color};
  height: 0.6rem;
  left: 0;
  margin-bottom: 2rem;
  position: absolute;
  top: 0;
  width: 100%;
`;
