import React from 'react';
import T from 'prop-types';

import GradientBorder from 'components/_base-ui/GradientBorder';

import { CardContainer, StyledH2 } from './styledComponents';

const GradientCard = ({ children, heading, ...restProps }) => (
  <CardContainer {...restProps}>
    <StyledH2>{heading}</StyledH2>
    <GradientBorder bottom="" top="-0.1rem" />
    {children}
    <GradientBorder bottom="-0.1rem" top="" />
  </CardContainer>
);

GradientCard.propTypes = {
  children: T.node.isRequired,
  heading: T.string.isRequired,
};

export default GradientCard;
