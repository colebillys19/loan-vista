import React from 'react';
import T from 'prop-types';

import { RowContainer, RowStripe } from './styledComponents';

const Row = ({ isError, reduceHeight }) => (
  <RowContainer reduceHeight={reduceHeight}>
    <RowStripe isError={isError} reduceHeight={reduceHeight} />
  </RowContainer>
);

Row.propTypes = { isError: T.bool.isRequired, reduceHeight: T.bool };

Row.defaultProps = { reduceHeight: false };

export default Row;
