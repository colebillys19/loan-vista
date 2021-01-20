/**
 * TabNav
 * @description ...
 */

import React, { useState } from 'react';
import T from 'prop-types';

import Tabs from './Tabs';
import { checkRoute } from './helpers';
import { VALID_ROUTES } from './constants';
import {
  DashboardButtonContainer,
  StyledButton,
  TabNavWrapper,
} from './styledComponents';

const TabNav = ({ dispatchNavigation, pathname }) => {
  const [value, setValue] = useState(checkRoute(pathname));

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
    dispatchNavigation(VALID_ROUTES[newValue]);
  };

  const handleDashboardButtonClick = (e) => {
    e.preventDefault();
    setValue(false);
    dispatchNavigation('/');
  };

  return (
    <TabNavWrapper>
      <DashboardButtonContainer>
        <StyledButton
          disableRipple
          id="dashboard-button"
          isOpaque={pathname !== '/'}
          onClick={handleDashboardButtonClick}
        >
          Dashboard
        </StyledButton>
      </DashboardButtonContainer>
      <Tabs handleChange={handleChange} value={value} />
    </TabNavWrapper>
  );
};

TabNav.propTypes = {
  dispatchNavigation: T.func.isRequired,
  pathname: T.string.isRequired,
};

export default TabNav;
