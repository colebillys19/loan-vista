import React from 'react';
import T from 'prop-types';

import { StyledTab, StyledTabs } from './styledComponents';

const Tabs = ({ handleChange, value }) => (
  <StyledTabs value={value} onChange={handleChange}>
    <StyledTab label="Item One" />
    <StyledTab label="Item Two" />
    <StyledTab label="Item Three" />
  </StyledTabs>
);

Tabs.propTypes = {
  handleChange: T.func.isRequired,
  value: T.number.isRequired,
};

export default Tabs;
