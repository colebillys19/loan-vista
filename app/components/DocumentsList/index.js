/**
 * DocumentsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListTable from 'components/_base-ui/ListTable';
import ListTableHead from 'components/_base-ui/ListTableHead';

import TableRow from './TableRow';
import { StyledTableHeader } from './styledComponents';

const DocumentsList = ({ documentsData, headers }) => (
  <ListTable>
    <ListTableHead>
      <tr>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            {header}
          </StyledTableHeader>
        ))}
      </tr>
    </ListTableHead>
    <tbody>
      {documentsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </tbody>
  </ListTable>
);

DocumentsList.propTypes = {
  documentsData: T.arrayOf(
    T.shape({
      dateSent: T.string,
      desc: T.string,
      from: T.string,
      id: T.number,
      pdf: T.string,
      timeSent: T.string,
      type: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
};

DocumentsList.defaultProps = {
  headers: ['dateSent', 'timeSent', 'type', 'from', 'desc', 'pdf'],
};

export default DocumentsList;
