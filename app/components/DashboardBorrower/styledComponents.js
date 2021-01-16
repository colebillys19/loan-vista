import styled from 'styled-components';

import KeyValueList from 'components/_base-ui/KeyValueList';

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionContainer = styled.section`
  background-color: #fcfcfc;
  border: 0.1rem solid #eee;
  margin: 3rem 0 5rem;
  padding: 1.5rem 2rem 3rem;
`;

export const StyledH2 = styled.h2`
  margin: 0 0 1rem;
`;

export const StyledKeyValueList = styled(KeyValueList)`
  width: 38rem;
`;
