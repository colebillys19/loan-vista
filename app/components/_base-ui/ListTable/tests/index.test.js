import React from 'react';
import { render } from 'react-testing-library';

import {
  StyledTable,
  StyledTableBody,
  StyledTableData,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
} from '../index';

const Component = (
  <StyledTable>
    <StyledTableHead>
      <StyledTableRow>
        <StyledTableHeader>header</StyledTableHeader>
      </StyledTableRow>
    </StyledTableHead>
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableData>data</StyledTableData>
      </StyledTableRow>
    </StyledTableBody>
  </StyledTable>
);

describe('<ListTable />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
