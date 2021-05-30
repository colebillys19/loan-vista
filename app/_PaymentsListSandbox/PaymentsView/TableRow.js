import React, { Fragment, useState } from 'react';
import T from 'prop-types';

import {
  StyledTableData,
  StyledTableRow,
} from 'components/_base-ui/GradientListTable';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import ArrowButton from '../ArrowButton';
import ExpandedContent from './ExpandedContent';
import { BaseTableData } from './styledComponents';

const TableRow = ({ data: { expandedData, mainData }, headers }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <StyledTableRow>
        {headers.map((header) => (
          <StyledTableData key={header}>{mainData[header]}</StyledTableData>
        ))}
        <BaseTableData isExpanded={isExpanded}>
          <ArrowButton
            handleClick={() => setIsExpanded(!isExpanded)}
            renderUp={isExpanded}
          />
          <ConditionalRender
            Component={ExpandedContent}
            propsToPassDown={{ data: expandedData }}
            shouldRender={isExpanded}
          />
        </BaseTableData>
      </StyledTableRow>
    </Fragment>
  );
};

TableRow.propTypes = {
  data: T.shape({
    date: T.string,
    desc: T.string,
    escrow: T.string,
    interest: T.string,
    principal: T.string,
    total: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
