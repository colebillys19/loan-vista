import React from 'react';
import T from 'prop-types';

import { StyledTableRow } from 'components/_base-ui/GradientListTable';

import { BaseTableData } from '../styledComponents';
import { CELL_ARR } from './constants';
import {
  Anchor,
  ContentContainer,
  StyledTwoColumnList,
} from './styledComponents';

/* eslint-disable react/no-array-index-key */
const PaymentDetailRow = ({ data }) => (
  <StyledTableRow>
    <BaseTableData>
      <Anchor>
        <ContentContainer>
          {data.map((listData, i) => (
            <StyledTwoColumnList
              key={i}
              data={listData}
              numRows={6}
              renderLoading={false}
            />
          ))}
        </ContentContainer>
      </Anchor>
    </BaseTableData>
    {CELL_ARR.map((v, i) => (
      <BaseTableData key={i} />
    ))}
  </StyledTableRow>
);

PaymentDetailRow.propTypes = {
  data: T.arrayOf(T.shape({ listData: T.array })).isRequired,
};

export default PaymentDetailRow;
