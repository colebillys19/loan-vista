import React from 'react';

import ListFilter from 'components/ListFilter';
import TabWrapper from 'components/TabWrapper';

import { SandboxContainer } from './styledComponents';

const Sandbox = () => (
  <TabWrapper>
    <SandboxContainer>
      <ListFilter />
    </SandboxContainer>
  </TabWrapper>
);

export default Sandbox;
