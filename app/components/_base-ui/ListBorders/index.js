import React, { Fragment } from 'react';

import GradientBorder from 'components/_base-ui/GradientBorder';

const ListBorders = () => (
  <Fragment>
    <GradientBorder bottom="" top="-0.1rem" />
    <GradientBorder bottom="" top="3.4rem" />
    <GradientBorder bottom="3.4rem" top="" />
    <GradientBorder bottom="-0.1rem" top="" />
  </Fragment>
);

export default ListBorders;
