import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';

import ExpandableCell from './ExpandableCell';
import useCheckHeight from './useCheckHeight';
import { DescTableData } from './styledComponents';

const YeetCell = ({ children }) => {
  const cellRef = React.useRef(null);
  const [renderExpandable, setRenderExpandable] = React.useState(false);
  useCheckHeight(cellRef, setRenderExpandable);

  return (
    <ConditionalRender
      Component={<ExpandableCell>{children}</ExpandableCell>}
      FallbackComponent={
        <DescTableData ref={cellRef}>{children}</DescTableData>
      }
      shouldRender={renderExpandable}
    />
  );
};

YeetCell.propTypes = { children: T.node.isRequired };

export default YeetCell;
