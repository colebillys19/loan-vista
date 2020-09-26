/**
 * PaymentsList
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import {
  ListBodySpinner,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
} from 'components/_base-ui/ListTable';
import ListSortButton from 'components/_base-ui/ListSortButton';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const PaymentsList = ({
  paymentsData,
  dispatchFetchPaymentsData,
  headers,
  loading,
  sortValues: { sortCol, sortOrder },
}) => {
  const [colClicked, setColClicked] = useState('');

  useEffect(() => {
    setColClicked('');
  }, [sortCol, sortOrder]);

  const handleSortClick = (header) => {
    setColClicked(header);

    if (header !== sortCol) {
      dispatchFetchPaymentsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchPaymentsData({
        sortOrder: sortOrder === 'desc' ? 'asc' : 'desc',
      });
    }
  };

  return (
    <StyledTable>
      <CustomTableHead>
        <StyledTableRow>
          {headers.map((header) => (
            <StyledTableHeader key={header} scope="col">
              <ListSortButton
                isActive={header === sortCol}
                isAscending={header === sortCol && sortOrder === 'asc'}
                loading={loading && header === colClicked}
                onClick={() => handleSortClick(header)}
                text={header}
              />
            </StyledTableHeader>
          ))}
        </StyledTableRow>
      </CustomTableHead>
      <ConditionalRender
        Component={
          <StyledTableBody>
            {paymentsData.map(({ id, ...restData }) => (
              <TableRow data={restData} headers={headers} key={id} />
            ))}
          </StyledTableBody>
        }
        FallbackComponent={<ListBodySpinner />}
        shouldRender={!loading}
      />
    </StyledTable>
  );
};

PaymentsList.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  headers: T.arrayOf(T.string),
  loading: T.bool.isRequired,
  paymentsData: T.arrayOf(
    T.shape({
      date: T.string,
      desc: T.string,
      escrow: T.string,
      id: T.string,
      interest: T.string,
      principal: T.string,
      total: T.string,
    }),
  ).isRequired,
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export default PaymentsList;
