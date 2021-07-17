import React from 'react';
import T from 'prop-types';

import {} from './styledComponents';

const CallAudioContent = ({ callAudioProps: { data, error, loading } }) => (
  <div style={{ fontSize: '2rem' }}>
    <div style={{ fontWeight: 'bold' }}>data</div>
    <div>{JSON.stringify(data)}</div>
    <div style={{ fontWeight: 'bold' }}>error</div>
    <div>{error ? 'true' : 'false'}</div>
    <div style={{ fontWeight: 'bold' }}>loading</div>
    <div>{loading ? 'true' : 'false'}</div>
  </div>
);

CallAudioContent.propTypes = {
  callAudioProps: T.shape({
    data: T.object.isRequired,
    error: T.oneOfType([T.bool, T.string]),
    loading: T.bool.isRequired,
  }).isRequired,
};

export default CallAudioContent;
