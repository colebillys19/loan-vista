import React from 'react';
import T from 'prop-types';

import { ArrowDownIcon, ArrowUpIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_shared/ConditionalRender';

import { StyledIconButton } from './styledComponents';

const ArrowButton = ({
  className,
  disableRipple,
  handleClick,
  renderUp,
  size,
}) => (
  <StyledIconButton
    className={className}
    disableRipple={disableRipple}
    onClick={handleClick}
  >
    <ConditionalRender
      Component={ArrowUpIcon}
      FallbackComponent={ArrowDownIcon}
      propsToPassDown={{ size }}
      shouldRender={renderUp}
    />
  </StyledIconButton>
);

ArrowButton.propTypes = {
  className: T.string,
  disableRipple: T.bool,
  handleClick: T.func.isRequired,
  renderUp: T.bool.isRequired,
  size: T.string,
};

ArrowButton.defaultProps = { disableRipple: true, size: '1.2rem' };

export default ArrowButton;
