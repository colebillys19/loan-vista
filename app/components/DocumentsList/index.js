/**
 * DocumentsList
 * @description ...
 */

import React from 'react';
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

const DocumentsList = ({
  documentsData,
  headers,
  loading,
  // sortAsc,
  // sortColumn,
}) => (
  <StyledTable>
    <CustomTableHead>
      <StyledTableRow>
        {headers.map((header) => {
          if (['date sent', 'type', 'from'].indexOf(header) !== -1) {
            return (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={false}
                  isAscending={false}
                  onClick={() => null}
                  text={header}
                />
              </StyledTableHeader>
            );
          }

          return (
            <StyledTableHeader key={header} scope="col">
              {header}
            </StyledTableHeader>
          );
        })}
      </StyledTableRow>
    </CustomTableHead>
    <ConditionalRender
      Component={
        <StyledTableBody>
          {documentsData.map(({ id, ...restData }) => (
            <TableRow data={restData} headers={headers} key={id} />
          ))}
        </StyledTableBody>
      }
      FallbackComponent={<ListBodySpinner />}
      shouldRender={!loading}
    />
  </StyledTable>
);

DocumentsList.propTypes = {
  documentsData: T.arrayOf(
    T.shape({
      'date sent': T.string,
      desc: T.string,
      from: T.string,
      id: T.string,
      pdf: T.string,
      'time sent': T.string,
      type: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
  loading: T.bool.isRequired,
  // sortAsc: T.bool,
  // sortColumn: T.string.isRequired,
};

DocumentsList.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
  // sortAsc: false,
};

export default DocumentsList;
