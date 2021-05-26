import React from 'react';
import T from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import {
  StyledTableData,
  StyledTableRow,
} from 'components/_base-ui/GradientListTable';
import LinkButton from 'components/_base-ui/LinkButton';

import ExpandableCell from './ExpandableCell';
import { Temp } from './styledComponents';

const TableRow = ({ data, headers }) => {
  const [isBig, setIsBig] = React.useState(false);
  const rowRef = React.useRef(null);
  const observer = React.useRef(
    new ResizeObserver((entries) => {
      const { height } = entries[0].contentRect;
      if (height > 25) {
        setIsBig(true);
      }
    }),
  );

  React.useLayoutEffect(() => {
    if (rowRef.current) {
      observer.current.observe(rowRef.current);
    }

    return () => {
      observer.current.unobserve();
    };
  }, [rowRef, observer]);

  return (
    <StyledTableRow ref={rowRef}>
      {headers.map((header) => {
        if (header === 'desc') {
          return (
            <ConditionalRender
              key={header}
              Component={ExpandableCell}
              FallbackComponent={Temp}
              propsToPassDown={{ children: data[header] }}
              shouldRender={isBig}
            />
          );
        }

        if (header === 'audio') {
          return (
            <StyledTableData key="audio">
              <LinkButton onClick={() => null} text="request" />
            </StyledTableData>
          );
        }

        return <StyledTableData key={header}>{data[header]}</StyledTableData>;
      })}
    </StyledTableRow>
  );
};

TableRow.propTypes = {
  data: T.shape({
    audio: T.string,
    date: T.string,
    dept: T.string,
    desc: T.string,
    rep: T.string,
    time: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
