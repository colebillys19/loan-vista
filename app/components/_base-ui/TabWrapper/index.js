/**
 * TabWrapper
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { BottomBorder, StyledSection } from './styledComponents';

const TabWrapper = ({ children }) => (
  <StyledSection>
    {children}
    <BottomBorder />
  </StyledSection>
);

TabWrapper.propTypes = { children: T.node.isRequired };

export default TabWrapper;
