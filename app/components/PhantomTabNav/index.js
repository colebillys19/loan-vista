/**
 * PhantomTabNav
 * @description ...
 */

import React, { useState } from 'react';
import T from 'prop-types';

import { checkRoute } from './helpers';
import {
  PhantomTabNavContainer,
  StyledTab,
  StyledTabs,
} from './styledComponents';

const PhantomTabNav = ({ pathname }) => {
  const [value, setValue] = useState(checkRoute(pathname));

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <PhantomTabNavContainer>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab disableRipple label="Calls" />
        <StyledTab disableRipple label="Emails + Letters" />
        <StyledTab disableRipple label="Payments" />
        <StyledTab disableRipple label="Misc" />
      </StyledTabs>
    </PhantomTabNavContainer>
  );
};

PhantomTabNav.propTypes = { pathname: T.string.isRequired };

export default PhantomTabNav;
