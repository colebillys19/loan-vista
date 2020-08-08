/**
 * PhantomTabNav
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import {
  PhantomTabNavContainer,
  StyledTab,
  StyledTabs,
} from './styledComponents';

const PhantomTabNav = ({ value }) => (
  <PhantomTabNavContainer>
    <StyledTabs value={value}>
      <StyledTab disableRipple label="Calls" />
      <StyledTab disableRipple label="Emails + Letters" />
      <StyledTab disableRipple label="Payments" />
      <StyledTab disableRipple label="Misc" />
    </StyledTabs>
  </PhantomTabNavContainer>
);

PhantomTabNav.propTypes = { value: T.oneOfType([T.number, T.bool]).isRequired };

export default PhantomTabNav;
