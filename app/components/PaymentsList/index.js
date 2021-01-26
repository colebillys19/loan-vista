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
  TableContainer,
  TableFooter,
} from 'components/_base-ui/GradientListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const PaymentsList = ({
  dispatchFetchPaymentsData,
  headers,
  paymentsData,
  sortLoading,
  sortValues: { sortCol: currentSortCol, sortOrder: currentSortOrder },
}) => {
  const [colClicked, setColClicked] = useState('');

  useEffect(() => {
    setColClicked('');
  }, [currentSortCol, currentSortOrder]);

  const handleSortClick = (header) => {
    setColClicked(header);

    if (header !== currentSortCol) {
      dispatchFetchPaymentsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchPaymentsData({
        sortOrder: currentSortOrder === 'desc' ? 'asc' : 'desc',
      });
    }
  };

  return (
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={header === currentSortCol}
                  isAscending={
                    header === currentSortCol && currentSortOrder === 'asc'
                  }
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
            <TableRow key={id} data={restData} headers={headers} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableContainer>
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
