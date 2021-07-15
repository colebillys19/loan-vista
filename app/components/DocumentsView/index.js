/**
 * DocumentsView
 * @description ...
 */

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import T from 'prop-types';
import throttle from 'lodash/throttle';

import ConditionalRender from 'components/_shared/ConditionalRender';
import {
  StyledTable,
  StyledTableBody,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';
import ListBorders from 'components/_shared/ListBorders';
import ScrollLoader from 'components/_shared/ScrollLoader';

import SortHead from './SortHead';
import TableRow from './TableRow';

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
  listHeaders,
  nextPageToFetch,
  scrollLoading,
  ...restProps
}) => {
  const nextPageToFetchRef = useRef(null);
  const scrollLoadingRef = useRef(null);
  const scrollPositionRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPositionRef);
    return () => {
      window.removeEventListener('scroll', updateScrollPositionRef);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    nextPageToFetchRef.current = nextPageToFetch;
    return () => {
      nextPageToFetchRef.current = null;
    };
  }, [nextPageToFetch]);

  useEffect(() => {
    scrollLoadingRef.current = scrollLoading;
    return () => {
      scrollLoadingRef.current = null;
    };
  }, [scrollLoading]);

  useLayoutEffect(() => {
    window.scrollTo({ top: scrollPositionRef.current });
  }, [documentsData]);

  const updateScrollPositionRef = () => {
    scrollPositionRef.current = window.scrollY;
  };

  const handleScroll = throttle(() => {
    const {
      document: {
        scrollingElement: { scrollHeight },
      },
      innerHeight,
      scrollY,
    } = window;

    const allPagesRendered =
      nextPageToFetchRef && nextPageToFetchRef.current === -1;
    const isPastThreshold = scrollY + innerHeight > scrollHeight - 500;
    const isScrollLoading = scrollLoadingRef && scrollLoadingRef.current;

    if (isPastThreshold && !isScrollLoading && !allPagesRendered) {
      dispatchFetchDocumentsData({ pageToFetch: nextPageToFetchRef.current });
    }
  }, 200);

  return (
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <SortHead
          dispatchFetchDocumentsData={dispatchFetchDocumentsData}
          headers={listHeaders}
          {...restProps}
        />
        <StyledTableBody>
          {documentsData.map(({ id, ...restData }) => (
            <TableRow key={id} data={restData} headers={listHeaders} />
          ))}
        </StyledTableBody>
        <ConditionalRender
          Component={ScrollLoader}
          propsToPassDown={{
            isEven: documentsData.length % 2 === 0,
            numCells: listHeaders.length,
          }}
          shouldRender={scrollLoading}
        />
        <TableFooter />
      </StyledTable>
    </TableContainer>
  );
};

DocumentsView.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  documentsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  nextPageToFetch: T.number.isRequired,
  scrollLoading: T.bool.isRequired,
};

export default DocumentsView;
