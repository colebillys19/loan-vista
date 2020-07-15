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
  ContentWrapper,
  HomePageButtonWrapper,
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
      <ContentWrapper>
        <HomePageButtonWrapper>
          <StyledButton disableRipple id="home-button" onClick={handleHomeButtonClick}>
            Loan Profile
          </StyledButton>
        </HomePageButtonWrapper>
        <Tabs value={value} handleChange={handleChange} />
      </ContentWrapper>
    </TabNavWrapper>
  );
};

TabNav.propTypes = { dispatchNavigation: T.func.isRequired, pathname: T.string.isRequired };

export default TabNav;