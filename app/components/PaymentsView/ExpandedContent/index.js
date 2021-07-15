import React from 'react';
import T from 'prop-types';

import { Container, StyledTwoColumnList } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const PaymentDetailRow = ({ data }) => (
  <Container>
    {data.map((listData, i) => (
      <StyledTwoColumnList key={i} data={listData} numRows={6} />
    ))}
  </Container>
);

PaymentDetailRow.propTypes = {
  data: T.arrayOf(T.shape({ listData: T.array })).isRequired,
};

export default PaymentDetailRow;
