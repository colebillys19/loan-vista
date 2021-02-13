import React from 'react';
import T from 'prop-types';

import { StyledTab, StyledTabs } from './styledComponents';

const Tabs = ({ handleChange, value }) => (
  <StyledTabs onChange={handleChange} value={value}>
    <StyledTab
      aria-controls="calls-view"
      disableRipple
      id="calls-tab"
      label="Calls"
    />
    <StyledTab
      aria-controls="documents-view"
      disableRipple
      id="documents-tab"
      label="Documents"
    />
    <StyledTab
      aria-controls="payments-view"
      disableRipple
      id="payments-tab"
      label="Payments"
    />
    <StyledTab
      aria-controls="escrow-view"
      disableRipple
      id="escrow-tab"
      label="Escrow"
    />
  </StyledTabs>
);

Tabs.propTypes = {
  handleChange: T.func.isRequired,
  value: T.oneOfType([T.number, T.bool]).isRequired,
};

export default Tabs;
