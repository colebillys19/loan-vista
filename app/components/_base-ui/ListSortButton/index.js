/**
 * ListSortButton
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';

import { IconWrapper, StyledLinkButton } from './styledComponents';

const ListSortButton = ({ isActive, isDescending, onClick, text }) => {
  const Icon = isDescending ? (
    <ArrowDownIcon size="0.8rem" />
  ) : (
    <ArrowUpIcon size="0.8rem" />
  );

  return (
    <React.Fragment>
      <StyledLinkButton onClick={onClick} text={text} />
      <ConditionalRender
        Component={<IconWrapper>{Icon}</IconWrapper>}
        shouldRender={isActive}
      />
    </React.Fragment>
  );
};

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isDescending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
