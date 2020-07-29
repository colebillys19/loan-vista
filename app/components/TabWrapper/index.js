/**
 * TabWrapper
 * @description ...
 */

import styled from 'styled-components';

import { appColorA } from 'styleConstants';

export default styled.section`
  background-color: ${({ isNotFound }) =>
    isNotFound ? 'transparent' : 'white'};
  color: ${appColorA};
  display: inline-block;
  font-size: 2rem;
  min-height: 110rem;
  padding: 3rem;
  vertical-align: top;
  width: 83.7rem;
`;
