/**
 * DocumentsList
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

const DocumentsList = ({
  documentsData,
  dispatchFetchDocumentsData,
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
      dispatchFetchDocumentsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchDocumentsData({
        sortOrder: sortOrder === 'desc' ? 'asc' : 'desc',
      });
    }
  };

  return (
    <StyledTable>
      <CustomTableHead>
        <StyledTableRow>
          {headers.map((header) => {
            if (['date sent', 'type', 'from'].indexOf(header) !== -1) {
              return (
                <StyledTableHeader key={header} scope="col">
                  <ListSortButton
                    isActive={header === sortCol}
                    isAscending={header === sortCol && sortOrder === 'asc'}
                    loading={loading && header === colClicked}
                    onClick={() => handleSortClick(header)}
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
};

DocumentsList.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
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
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

DocumentsList.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
};

export default DocumentsList;
