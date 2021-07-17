import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_shared/ListTable';
import LinkButton from 'components/_shared/LinkButton';

import { LinkButtonContainer } from './styledComponents';

const CustomTableRow = ({ data, handleRequestClick, headers }) => (
  <StyledTableRow>
    {headers.map((header) => {
      if (header === 'desc') {
        const stringToRender =
          data[header] === '-'
            ? data[header]
            : `${data[header].slice(0, 20)}...`;
        return <StyledTableData key={header}>{stringToRender}</StyledTableData>;
      }

      if (header === 'audio') {
        return (
          <StyledTableData key={header}>
            <LinkButtonContainer>
              <LinkButton onClick={handleRequestClick} text="request" />
            </LinkButtonContainer>
          </StyledTableData>
        );
      }

      return <StyledTableData key={header}>{data[header]}</StyledTableData>;
    })}
  </StyledTableRow>
);

CustomTableRow.propTypes = {
  data: T.object,
  handleRequestClick: T.func,
  headers: T.array,
};

export default CustomTableRow;
