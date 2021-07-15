import React from 'react';
import T from 'prop-types';

import { TableRowContainer, TableRowStripe } from './styledComponents';

const TableRow = ({ isError }) => (
  <TableRowContainer>
    <TableRowStripe isError={isError} />
  </TableRowContainer>
);

TableRow.propTypes = { isError: T.bool.isRequired };

export default TableRow;
