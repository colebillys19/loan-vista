import React from 'react';
import T from 'prop-types';
import { Slice as VictorySlice } from 'victory-pie';

const Slice = (props) => {
  const {
    datum: { _x },
    focusedSlice,
    style,
  } = props;

  return (
    <VictorySlice
      {...props}
      style={{
        ...style,
        opacity: focusedSlice !== -1 && focusedSlice !== _x ? 0.2 : 1,
      }}
    />
  );
};

Slice.propTypes = {
  datum: T.object,
  focusedSlice: T.number,
  style: T.object,
};

export default Slice;
