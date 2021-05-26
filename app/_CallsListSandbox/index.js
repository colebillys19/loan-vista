import React from 'react';

import { Container } from './styledComponents';
import CallsView from './CallsView';
import MOCK_DATA from './mockData';

const CallsListSandbox = () => (
  <Container>
    <CallsView
      callsData={MOCK_DATA}
      dispatchFetchCallsData={() => null}
      headers={['date', 'time', 'dept', 'rep', 'desc', 'audio']}
      lastSortCol="date"
      lastSortOrder="desc"
      sortLoading={false}
    />
  </Container>
);

export default CallsListSandbox;
