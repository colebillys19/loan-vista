/**
 * TabNav
 * @description ...
 */

import React, { useState } from 'react';

import Tabs from './Tabs';
import {
  ContentWrapper,
  HomePageButtonWrapper,
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
          <div>Loan Profile</div>
        </HomePageButtonWrapper>
        <Tabs value={value} handleChange={handleChange} />
      </ContentWrapper>
    </TabNavWrapper>
  );
};

export default TabNav;
