import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';
import KeyValueList from 'components/_base-ui/KeyValueList';

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionContainer = styled.section`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 50%,
    ${backgroundColor} 100%
  );
  margin: 3rem 0 5rem;
  padding: 2rem 2.5rem 3rem;
  position: relative;
`;

export const StyledKeyValueList = styled(KeyValueList)`
  width: 37rem;
`;
