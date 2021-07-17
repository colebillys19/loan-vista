import React from 'react';
import T from 'prop-types';

import {} from './styledComponents';

const CallAudioContent = ({ audioData }) => (
  <div>{JSON.stringify(audioData)}</div>
);

CallAudioContent.propTypes = { audioData: T.object.isRequired };

export default CallAudioContent;
