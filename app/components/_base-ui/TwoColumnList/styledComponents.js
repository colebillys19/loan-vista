import styled from 'styled-components';

import { textColorB } from 'styleConstants';

export const Label = styled.span`
  color: ${textColorB};
`;

export const ListHeading = styled.h3`
  margin: 0 0 1rem;
`;

export const Row = styled.div`
  bottom: ${({ reduceHeight }) => (reduceHeight ? '0.5rem' : '0')};
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
  position: relative;
  width: 100%;
`;

export const Value = styled.span`
  float: right;
`;
