import styled from 'styled-components';

import { textColorB } from 'styleConstants';

export const Detail = styled.span`
  color: ${({ color }) => color};
  font-weight: ${({ color }) => (color ? 'bold' : 'normal')};
`;

export const DetailLabel = styled.span`
  color: ${textColorB};
`;

export const Row = styled.div`
  & span:last-of-type {
    margin-left: 0.3rem;
  }
  & :not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const SidebarSummaryContainer = styled.section`
  & :not(:last-of-type) {
    margin-bottom: 2.2rem;
  }
`;

export const StyledH5 = styled.h3`
  margin: 0;
  display: inline-block;
`;

export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  & svg {
    margin-right: 0.5rem;
  }
`;
