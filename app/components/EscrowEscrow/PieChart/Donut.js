import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

const Donut = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 200 200"
    {...restProps}
  >
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <path
        d="M100,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0 Z M100,46 C70.1766235,46 46,70.1766235 46,100 C46,129.823376 70.1766235,154 100,154 C129.823376,154 154,129.823376 154,100 C154,70.1766235 129.823376,46 100,46 Z"
        fill={colorB}
      />
      <path
        d="M100,1 C154.67619,1 199,45.3238098 199,100 C199,154.67619 154.67619,199 100,199 C45.3238098,199 1,154.67619 1,100 C1,45.3238098 45.3238098,1 100,1 Z M100,45 C69.6243388,45 45,69.6243388 45,100 C45,130.375661 69.6243388,155 100,155 C130.375661,155 155,130.375661 155,100 C155,69.6243388 130.375661,45 100,45 Z"
        fill={colorA}
      />
    </g>
  </SvgIcon>
);

Donut.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

Donut.defaultProps = {
  colorA: 'rgb(255, 255, 255)',
  colorB: 'rgb(0, 0, 0)',
  size: '20rem',
};

export default Donut;
