import React from 'react';
import T from 'prop-types';
import { Slice as VictorySlice } from 'victory-pie';

const Slice = (props) => {
  const {
    datum: { _x },
    focusedSlice,
    style: { fill, ...restStyle },
  } = props;

  return (
    <VictorySlice
      {...props}
      style={{
        ...restStyle,
        fill: focusedSlice !== -1 && focusedSlice !== _x ? 'white' : fill,
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
