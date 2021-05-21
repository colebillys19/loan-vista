import { useLayoutEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useCheckHeight = (ref, setRenderExpandable) => {
  const observer = useRef(
    new ResizeObserver(([{ contentRect: { height } }]) => {
      if (height > 25) {
        setRenderExpandable(true);
      }
    }),
  );

  useLayoutEffect(() => {
    const { current } = observer;

    if (ref.current) {
      current.observe(ref.current);
    }

    return () => {
      current.unobserve();
    };
  }, [ref, observer]);
};

export default useCheckHeight;
