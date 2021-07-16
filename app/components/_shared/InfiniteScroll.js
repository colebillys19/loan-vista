import { useEffect, useLayoutEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

const InfiniteScroll = ({
  data,
  dispatchFetchData,
  nextPageToFetch,
  render,
  scrollLoading,
}) => {
  const nextPageToFetchRef = useRef(null);
  const scrollLoadingRef = useRef(null);
  const scrollPositionRef = useRef(null);

  useEffect(() => {
    if (scrollLoading) {
      window.addEventListener('scroll', updateScrollPositionRef);
    } else {
      window.removeEventListener('scroll', updateScrollPositionRef);
    }
  }, [scrollLoading]);

  useEffect(
    () => () => {
      window.removeEventListener('scroll', updateScrollPositionRef);
    },
    [],
  );

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
  }, [data]);

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
      dispatchFetchData({ pageToFetch: nextPageToFetchRef.current });
    }
  }, 200);

  return render();
};

export default InfiniteScroll;
