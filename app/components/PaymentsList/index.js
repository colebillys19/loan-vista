/**
 * PaymentsList
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ListBorders from 'components/_base-ui/ListBorders';
import ListSortButton from 'components/_base-ui/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableFooter,
  TableWrapper,
} from 'components/_base-ui/ListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const PaymentsList = ({
  paymentsData,
  dispatchFetchPaymentsData,
  headers,
  sortLoading,
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
    <TableWrapper>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={header === sortCol}
                  isAscending={header === sortCol && sortOrder === 'asc'}
                  loading={sortLoading && header === colClicked}
                  onClick={() => handleSortClick(header)}
                  text={header}
                />
              </StyledTableHeader>
            ))}
          </StyledTableRow>
        </CustomTableHead>
        <StyledTableBody>
          {paymentsData.map(({ id, ...restData }) => (
            <TableRow data={restData} headers={headers} key={id} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableWrapper>
  );
};

PaymentsList.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  headers: T.arrayOf(T.string),
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
  sortLoading: T.bool.isRequired,
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export default PaymentsList;
