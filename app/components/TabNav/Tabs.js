import React from 'react';
import T from 'prop-types';

import { StyledTab, StyledTabs } from './styledComponents';

const Tabs = ({ handleChange, value }) => (
  <StyledTabs value={value} onChange={handleChange}>
    <StyledTab aria-controls="calls-view" disableRipple id="calls-tab" label="Calls" />
    <StyledTab aria-controls="emails-view" disableRipple id="emails-tab" label="Emails" />
    <StyledTab aria-controls="payments-view" disableRipple id="payments-tab" label="Payments" />
    <StyledTab aria-controls="misc-view" disableRipple id="misc-tab" label="Misc" />
  </StyledTabs>
);

Tabs.propTypes = {
  handleChange: T.func.isRequired,
  value: T.oneOfType([T.number, T.bool]).isRequired,
};

export default Tabs;
