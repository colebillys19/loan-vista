import React, { useState } from 'react';
import T from 'prop-types';

import { AbsoluteButton, ExpandableDescTableData } from './styledComponents';

const ExpandableCell = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpandableDescTableData isExpanded={isExpanded}>
      {children}
      <AbsoluteButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'less' : 'more'}
      </AbsoluteButton>
    </ExpandableDescTableData>
  );
};

ExpandableCell.propTypes = { children: T.node.isRequired };

export default ExpandableCell;
