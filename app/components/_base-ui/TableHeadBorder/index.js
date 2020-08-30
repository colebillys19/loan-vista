/**
 * TableHeadBorder
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { BorderContainer, GradientBorder } from './styledComponents';

const TableHeadBorder = ({ hideBottom }) => (
  <BorderContainer>
    <GradientBorder />
    <GradientBorder hideBottom={hideBottom} isBottom />
  </BorderContainer>
);

TableHeadBorder.propTypes = { hideBottom: T.bool.isRequired };

export default TableHeadBorder;
