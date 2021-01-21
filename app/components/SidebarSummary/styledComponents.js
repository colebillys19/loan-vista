import styled from 'styled-components';

import { skeletonGrey, textColorB } from 'styleConstants';

export const Detail = styled.span`
  color: ${({ color }) => color};
  font-weight: ${({ color }) => (color ? 'bold' : 'normal')};
`;

export const DetailLabel = styled.span`
  color: ${textColorB};
`;

export const Row = styled.div`
  min-height: 2.1rem;
  & span:last-of-type {
    margin-left: 0.3rem;
  }
  & :not(:last-of-type) {
    height: 1.6rem;
  }
`;

export const SidebarSummaryContainer = styled.section`
  & :not(:last-of-type) {
    margin-bottom: 2.2rem;
  }
`;

export const SkeletonRowContainer = styled.div`
  min-height: 2.1rem;
  & :not(:last-of-type) {
    height: 1.6rem;
  }
`;

export const SkeletonRowStripe = styled.div`
  background-color: ${skeletonGrey};
  height: 1.2rem;
  position: relative;
  top: 0.4rem;
`;

export const StyledH5 = styled.h3`
  display: inline-block;
  margin: 0;
`;

export const SummaryTitleContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 0.8rem;
  & svg {
    margin-right: 0.5rem;
  }
`;
