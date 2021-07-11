import React from 'react';
import T from 'prop-types';

import { BulletIcon } from 'images/iconComponents';
import { appColorA, appColorB } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientBorder from 'components/_shared/GradientBorder';

import {
  CardContainer,
  StyledH2,
  SummaryTitleContainer,
  ThinStripe,
  TopStripe,
} from './styledComponents';

const GradientCard = ({
  children,
  color,
  heading,
  Icon,
  reduceBottomPadding,
}) => {
  const FallbackIcon = (
    <BulletIcon
      color={color === appColorB ? appColorA : appColorB}
      size="1.8rem"
    />
  );

  return (
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
};

GradientCard.propTypes = {
  children: T.node.isRequired,
  color: T.string,
  heading: T.string.isRequired,
  Icon: T.node,
  reduceBottomPadding: T.bool,
};

GradientCard.defaultProps = { color: appColorA, reduceBottomPadding: false };

export default GradientCard;
