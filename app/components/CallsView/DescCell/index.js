import React, { useLayoutEffect, useRef, useState } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_shared/ConditionalRender';

import ExpandableCell from './ExpandableCell';
import { DescTableData } from './styledComponents';

const DescCell = ({ children }) => {
  const cellRef = useRef(null);
  const [renderExpandable, setRenderExpandable] = useState(false);

  useLayoutEffect(() => {
    const {
      current: { clientHeight },
    } = cellRef;
    if (clientHeight > 30) {
      setRenderExpandable(true);
    }
  }, [cellRef]);

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

DescCell.propTypes = { children: T.node.isRequired };

export default DescCell;
