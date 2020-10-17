import React, { Fragment } from 'react';

import { GradientBorder } from './styledComponents';

const ListBorders = () => (
  <Fragment>
    <GradientBorder bottom="-0.1rem" top="" />
    <GradientBorder bottom="" top="3.4rem" />
    <GradientBorder bottom="" top="-0.1rem" />
  </Fragment>
);

export default ListBorders;
