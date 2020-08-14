import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorA, iconColorB } from 'styleConstants';

const FolderIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <g>
      <path d="m61 56.5h-58v-49h14.727v8.647h43.273z" fill={colorB} />
      <path
        d="m19.728 14.147v-8.647h-18.728v4h14.728v8.647h43.272v36.353h-54v-41h-4v45h62v-44.353z"
        fill={colorA}
      />
    </g>
  </SvgIcon>
);

FolderIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

FolderIcon.defaultProps = {
  colorA: iconColorA,
  colorB: iconColorB,
  size: '3rem',
};

export default FolderIcon;
