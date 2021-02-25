import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorA, iconColorC } from 'styleConstants';

const CashIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <g>
      <path
        d="M53,13.5H11a8.031,8.031,0,0,1-8,8.062V42.438A8.031,8.031,0,0,1,11,50.5H49L61,38.407V21.562A8.031,8.031,0,0,1,53,13.5Z"
        fill={colorA}
      />
      <path
        d="M34.007,42.357V40.116A5.1,5.1,0,0,0,33.043,30H30.972a1.107,1.107,0,1,1,0-2.214H36.15v-4H34.007V21.643h-4v2.241A5.1,5.1,0,0,0,30.972,34h2.071a1.107,1.107,0,0,1,0,2.214h-5.18v4h2.143v2.143Z"
        fill={colorB}
      />
      <path
        d="M1.007,11.5v41H49.833L63,39.23V27.5H59v8.9H47V48.5H12.809a10.062,10.062,0,0,0-7.8-7.86V23.36a10.062,10.062,0,0,0,7.8-7.86H51.2A10.064,10.064,0,0,0,59,23.36h4V11.5ZM51,40.406h5.2L51,45.645ZM8.665,48.5H5.007V44.791A6.055,6.055,0,0,1,8.665,48.5ZM5.007,19.209V15.5H8.665A6.055,6.055,0,0,1,5.007,19.209Zm53.993,0A6.053,6.053,0,0,1,55.343,15.5H59Z"
        fill={colorB}
      />
    </g>
  </SvgIcon>
);

CashIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

CashIcon.defaultProps = {
  colorA: iconColorA,
  colorB: iconColorC,
  size: '3rem',
};

export default CashIcon;
