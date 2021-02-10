import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorB, iconColorC } from 'styleConstants';

const TextIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="-34 0 504 504"
    {...restProps}
  >
    <path
      d="m16.035156 16h303.429688v370.855469h-303.429688zm0 0"
      fill={colorA}
    />
    <path
      d="m436.640625 117.121094v370.878906c-.027344 8.824219-7.175781 15.972656-16 16h-303.441406c-8.835938.003906-16-7.164062-16-16v-117.121094h202.242187v-338.878906h-271.441406v338.878906h37.199219v32h-53.199219c-8.824219-.023437-15.9726562-7.171875-16-16v-370.878906c.0273438-8.824219 7.175781-15.9726562 16-16h303.441406c8.835938-.00390625 16 7.164062 16 16v370.878906c0 8.839844-7.164062 16.003906-16 16h-186.242187v69.121094h271.441406v-338.878906h-37.199219v-32h53.199219c8.824219.023437 15.972656 7.171875 16 16zm0 0"
      fill={colorB}
    />
    <path
      d="m84.320312 101.144531h166.859376v32h-166.859376zm0 0"
      fill={colorB}
    />
    <path
      d="m84.320312 185.429688h166.859376v32h-166.859376zm0 0"
      fill={colorB}
    />
    <path
      d="m84.320312 269.714844h166.859376v32h-166.859376zm0 0"
      fill={colorB}
    />
  </SvgIcon>
);

TextIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

TextIcon.defaultProps = {
  colorA: iconColorB,
  colorB: iconColorC,
  size: '3rem',
};

export default TextIcon;
