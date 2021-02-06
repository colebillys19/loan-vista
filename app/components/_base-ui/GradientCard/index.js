import React from 'react';
import T from 'prop-types';

import { BulletIcon } from 'images/icons';
import { appColorA, iconColorA } from 'styleConstants';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import GradientBorder from 'components/_base-ui/GradientBorder';

import {
  CardContainer,
  StyledH2,
  SummaryTitleContainer,
  ThinStripe,
  TopStripe,
} from './styledComponents';

const FallbackIcon = <BulletIcon color={iconColorA} size="1.8rem" />;

const GradientCard = ({
  children,
  color,
  heading,
  Icon,
  reduceBottomPadding,
}) => (
  <CardContainer reduceBottomPadding={reduceBottomPadding}>
    <TopStripe color={color} />
    <SummaryTitleContainer noIcon={!Icon}>
      <ConditionalRender
        Component={Icon}
        FallbackComponent={FallbackIcon}
        shouldRender={!!Icon}
      />
      <StyledH2>{heading}</StyledH2>
      <ThinStripe />
    </SummaryTitleContainer>
    {children}
    <GradientBorder bottom="-0.1rem" top="" />
  </CardContainer>
);

GradientCard.propTypes = {
  children: T.node.isRequired,
  color: T.string,
  heading: T.string.isRequired,
  Icon: T.node,
  reduceBottomPadding: T.bool,
};

GradientCard.defaultProps = { color: appColorA, reduceBottomPadding: false };

export default GradientCard;
