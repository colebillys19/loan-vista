import React from 'react';
import T from 'prop-types';

import {} from './styledComponents';

const DocumentDownloadContent = ({ downloadData }) => (
  <div>{JSON.stringify(downloadData)}</div>
);

DocumentDownloadContent.propTypes = { downloadData: T.object.isRequired };

export default DocumentDownloadContent;
