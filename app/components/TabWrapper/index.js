/**
 * TabWrapper
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import NavTrack from 'components/_baseUI/NavTrack';

import { StyledSection } from './styledComponents';

const TabWrapper = ({ children }) => (
  <StyledSection>
    <NavTrack />
    {children}
  </StyledSection>
);

TabWrapper.propTypes = { children: T.node.isRequired };

export default TabWrapper;
