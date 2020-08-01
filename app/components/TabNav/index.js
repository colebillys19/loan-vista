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
  ContentContainer,
  HomeViewButtonWrapper,
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

  const handleHomeButtonClick = (e) => {
    e.preventDefault();
    setValue(false);
    dispatchNavigation('/');
  };

  return (
    <TabNavWrapper>
      <ContentContainer>
        <HomeViewButtonWrapper>
          <StyledButton
            disableRipple
            id="home-button"
            onClick={handleHomeButtonClick}
          >
            Loan Profile
          </StyledButton>
        </HomeViewButtonWrapper>
        <Tabs value={value} handleChange={handleChange} />
      </ContentContainer>
    </TabNavWrapper>
  );
};

TabNav.propTypes = {
  dispatchNavigation: T.func.isRequired,
  pathname: T.string.isRequired,
};

export default TabNav;
