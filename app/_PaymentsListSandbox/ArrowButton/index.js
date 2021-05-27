import React from 'react';
import T from 'prop-types';

import { ArrowDownIcon, ArrowUpIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import { StyledIconButton } from './styledComponents';

const ArrowButton = ({ handleClick, renderUp }) => (
  <StyledIconButton disableRipple onClick={handleClick}>
    <ConditionalRender
      Component={ArrowUpIcon}
      FallbackComponent={ArrowDownIcon}
      propsToPassDown={{ size: '1.2rem' }}
      shouldRender={renderUp}
    />
  </StyledIconButton>
);

ArrowButton.propTypes = {
  handleClick: T.func.isRequired,
  renderUp: T.bool.isRequired,
};

export default ArrowButton;
