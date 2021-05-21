import React, { useState } from 'react';
import T from 'prop-types';

import { ExpandButton, ExpandableTableData } from './styledComponents';

const ExpandableCell = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpandableTableData isExpanded={isExpanded}>
      {children}
      <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'less' : 'more'}
      </ExpandButton>
    </ExpandableTableData>
  );
};

ExpandableCell.propTypes = { children: T.node.isRequired };

export default ExpandableCell;
