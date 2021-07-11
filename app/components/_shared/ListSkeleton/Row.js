import React from 'react';
import T from 'prop-types';

import { RowContainer, RowStripe } from './styledComponents';

const Row = ({ reduceHeight }) => (
  <RowContainer reduceHeight={reduceHeight}>
    <RowStripe reduceHeight={reduceHeight} />
  </RowContainer>
);

Row.propTypes = { reduceHeight: T.bool };

Row.defaultProps = { reduceHeight: false };

export default Row;
