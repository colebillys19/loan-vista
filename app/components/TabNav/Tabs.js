import React from 'react';
import T from 'prop-types';

import PhantomTabNav from 'components/PhantomTabNav';

import { StyledTab, StyledTabs, TabsContainer } from './styledComponents';

const Tabs = ({ handleChange, value }) => (
  <TabsContainer>
    <StyledTabs value={value} onChange={handleChange}>
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
        aria-controls="misc-view"
        disableRipple
        id="misc-tab"
        label="Misc"
      />
    </StyledTabs>
    <PhantomTabNav value={value} />
  </TabsContainer>
);

Tabs.propTypes = {
  handleChange: T.func.isRequired,
  value: T.oneOfType([T.number, T.bool]).isRequired,
};

export default Tabs;
