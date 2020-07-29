/**
 * TabWrapper
 * @description ...
 */

import styled from 'styled-components';

export default styled.section`
  background-color: ${({ isNotFound }) =>
    isNotFound ? 'transparent' : 'white'};
  display: inline-block;
  margin-bottom: 4rem;
  min-height: 110rem;
  padding: 0.5rem;
  vertical-align: top;
  width: 83.7rem;
`;
