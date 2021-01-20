import React from 'react';
import T from 'prop-types';

import GradientBorder from 'components/_base-ui/GradientBorder';

import {
  CardContainer,
  Stripe,
  StyledH2,
  SummaryTitleContainer,
} from './styledComponents';

const GradientCard = ({ children, heading, Icon, reduceBottomPadding }) => (
  <CardContainer reduceBottomPadding={reduceBottomPadding}>
    <Stripe />
    <SummaryTitleContainer>
      {Icon && Icon}
      <StyledH2>{heading}</StyledH2>
    </SummaryTitleContainer>
    {children}
    <GradientBorder bottom="-0.1rem" top="" />
  </CardContainer>
);

GradientCard.propTypes = {
  children: T.node.isRequired,
  heading: T.string.isRequired,
  Icon: T.node,
  reduceBottomPadding: T.bool,
};

GradientCard.defaultProps = { reduceBottomPadding: false };

export default GradientCard;
