import React from 'react';
import T from 'prop-types';

import { StyledTab, StyledTabs } from './styledComponents';

const Tabs = ({ handleChange, value }) => (
  <StyledTabs value={value} onChange={handleChange}>
    <StyledTab label="Calls" disableRipple />
    <StyledTab label="Emails" disableRipple />
    <StyledTab label="Payments" disableRipple />
    <StyledTab label="Escrow" disableRipple />
  </StyledTabs>
);

Tabs.propTypes = {
  handleChange: T.func.isRequired,
  value: T.number.isRequired,
};

export default Tabs;
