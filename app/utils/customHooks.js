import { useEffect, useRef } from 'react';

/**
 * usePrevious
 * @description stores a value from a given component render in a ref, makes
 *              it available on subsequent renders
 */
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
