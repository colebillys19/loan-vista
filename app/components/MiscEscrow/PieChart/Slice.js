import React from 'react';
import T from 'prop-types';
import { Slice as VictorySlice } from 'victory-pie';

const Slice = (props) => {
  const {
    datum: { x },
    focusedSlice,
    style,
  } = props;

  return (
    <VictorySlice
      {...props}
      style={{
        ...style,
        opacity: !!focusedSlice && focusedSlice !== x ? 0.3 : 1,
      }}
    />
  );
};

Slice.propTypes = {
  datum: T.object,
  focusedSlice: T.string,
  style: T.object,
};

export default Slice;
