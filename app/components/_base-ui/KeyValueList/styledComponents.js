import styled from 'styled-components';

import { textColorB } from 'styleConstants';

export const Key = styled.span`
  color: ${textColorB};
`;

export const ListHeading = styled.h3`
  margin: 0 0 1rem;
`;

export const Row = styled.div`
  height: 1.6rem;
  position: relative;
  width: 100%;

  &:not(:first-of-type) {
    margin-top: ${({ $reduceMargin }) => ($reduceMargin ? '0' : '0.5rem')};
  }
`;

export const Value = styled.span`
  float: right;
`;
