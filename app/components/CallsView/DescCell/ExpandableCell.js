import React, { useState } from 'react';
import T from 'prop-types';

import { ExpandableTableData, StyledArrowButton } from './styledComponents';

const ExpandableCell = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpandableTableData isExpanded={isExpanded}>
      {children}
      <StyledArrowButton
        handleClick={() => setIsExpanded(!isExpanded)}
        renderUp={isExpanded}
      />
    </ExpandableTableData>
  );
};

ExpandableCell.propTypes = { children: T.node.isRequired };

export default ExpandableCell;
