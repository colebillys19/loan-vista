import React, { useState } from 'react';
import T from 'prop-types';

import { AbsoluteButton, Yoy } from './styledComponents';

const ExpandableCell = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Yoy isExpanded={isExpanded}>
      {children}
      <AbsoluteButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'less' : 'more'}
      </AbsoluteButton>
    </Yoy>
  );
};

ExpandableCell.propTypes = { children: T.node.isRequired };

export default ExpandableCell;
