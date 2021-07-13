/**
 * CallsView
 * @description ...
 */

import React, { useEffect, useRef } from 'react';
import T from 'prop-types';
import throttle from 'lodash/throttle';

import ConditionalRender from 'components/_shared/ConditionalRender';
import ListBorders from 'components/_shared/ListBorders';
import ScrollLoader from 'components/_shared/ScrollLoader';
import {
  StyledTable,
  StyledTableBody,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';

import SortHead from './SortHead';
import TableRow from './TableRow';

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  listHeaders,
  nextPageToFetch,
  scrollLoading,
  ...restProps
}) => {
  const scrollPositionRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, nextPageToFetch]);

  useEffect(() => {
    if (scrollPositionRef.current) {
      window.scrollTo({ top: scrollPositionRef.current });
    }
  }, [callsData]);

  const handleScroll = throttle(() => {
    const {
      document: {
        scrollingElement: { scrollHeight },
      },
      innerHeight,
      scrollY,
    } = window;

    const isPastThreshold = scrollY + innerHeight > scrollHeight - 100;
    if (isPastThreshold && !scrollLoading && nextPageToFetch !== -1) {
      scrollPositionRef.current = window.scrollY;

      dispatchFetchCallsData({ pageToFetch: nextPageToFetch });
    } else if (scrollPositionRef.current) {
      scrollPositionRef.current = null;
    }
  }, 200);

  return (
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <SortHead
          dispatchFetchCallsData={dispatchFetchCallsData}
          headers={listHeaders}
          {...restProps}
        />
        <StyledTableBody>
          {callsData.map(({ id, ...restData }) => (
            <TableRow key={id} data={restData} headers={listHeaders} />
          ))}
        </StyledTableBody>
        <ConditionalRender
          Component={ScrollLoader}
          propsToPassDown={{
            isEven: callsData.length % 2 === 0,
            numCells: listHeaders.length,
          }}
          shouldRender={scrollLoading}
        />
        <TableFooter />
      </StyledTable>
    </TableContainer>
  );
};

CallsView.propTypes = {
  callsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  nextPageToFetch: T.number.isRequired,
  scrollLoading: T.bool.isRequired,
};

export default CallsView;
