/**
 * TabNav
 * @description ...
 */

import React, { useState } from 'react';

import Tabs from './Tabs';
import {
  ContentWrapper,
  HomePageButtonWrapper,
  StyledButton,
  TabNavWrapper,
} from './styledComponents';

const TabNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <TabNavWrapper>
      <ContentWrapper>
        <HomePageButtonWrapper>
          <StyledButton disableRipple>Loan Profile</StyledButton>
        </HomePageButtonWrapper>
        <Tabs value={value} handleChange={handleChange} />
      </ContentWrapper>
    </TabNavWrapper>
  );
};

export default TabNav;
