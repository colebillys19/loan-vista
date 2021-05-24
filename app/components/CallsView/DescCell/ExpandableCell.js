import React, { useState } from 'react';
import T from 'prop-types';

import { ArrowDownIcon, ArrowUpIcon } from 'images/iconComponents';
import { textColorB } from 'styleConstants';

import { ExpandButton, ExpandableTableData } from './styledComponents';

const ExpandableCell = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const Icon = isExpanded ? ArrowUpIcon : ArrowDownIcon;

  return (
    <ExpandableTableData isExpanded={isExpanded}>
      {children}
      <ExpandButton
        disableRipple
        onClick={() => setIsExpanded(!isExpanded)}
        startIcon={<Icon color={textColorB} size="0.7rem" />}
      >
        {isExpanded ? 'less' : 'more'}
      </ExpandButton>
    </ExpandableTableData>
  );
};

ExpandableCell.propTypes = { children: T.node.isRequired };

export default ExpandableCell;
