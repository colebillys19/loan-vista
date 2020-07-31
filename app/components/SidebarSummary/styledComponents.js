import styled from 'styled-components';

export const DetailLabel = styled.span`
  color: grey;
`;

export const SidebarSummaryWrapper = styled.section`
  & :last-of-type {
    padding-bottom: 2rem;
  }
  & :not(:last-of-type) {
    margin-bottom: 2.2rem;
  }
`;

export const StyledH5 = styled.h3`
  margin: 0;
  display: inline-block;
`;

export const SummaryDetail = styled.div`
  & span:last-of-type {
    margin-left: 0.3rem;
  }
  & :not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  & svg {
    margin-right: 0.5rem;
  }
`;
