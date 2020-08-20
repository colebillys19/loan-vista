/**
 * TableHeadBorder
 * @description ...
 */

import React from 'react';

import { BorderContainer, GradientBorder } from './styledComponents';

const TableHeadBorder = () => (
  <BorderContainer>
    <GradientBorder />
    <GradientBorder isBottom />
  </BorderContainer>
);

export default TableHeadBorder;
