import React from 'react';
import T from 'prop-types';

import { StyledTableRow } from 'components/_base-ui/GradientListTable';

import { BaseTableData } from '../styledComponents';
import { CELL_ARR } from './constants';
import { Anchor, ContentContainer } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const PaymentDetailRow = ({ data }) => (
  <StyledTableRow>
    <BaseTableData>
      <Anchor>
        <ContentContainer>
          {Object.keys(data).map((key) => (
            <div key={key}>
              {key}:&nbsp;
              <b>{data[key]}</b>
            </div>
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
  data: T.shape({
    accidentHealthInsurance: T.string,
    accruedLateCharge: T.string,
    date: T.string,
    desc: T.string,
    effectiveDate: T.string,
    escrow: T.string,
    escrowBalance: T.string,
    fees: T.string,
    id: T.string,
    interest: T.string,
    lifeInsurance: T.string,
    misc: T.string,
    otherTotal: T.string,
    principal: T.string,
    principalBalance: T.string,
    replacementReserve: T.string,
    restrictedReserve: T.string,
    suspense: T.string,
    time: T.string,
    total: T.string,
  }).isRequired,
};

export default PaymentDetailRow;
