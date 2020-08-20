/**
 * ListSortButton
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';

import { IconWrapper, StyledLinkButton } from './styledComponents';

const ListSortButton = ({ isActive, isAscending, onClick, text }) => {
  const Icon = isAscending ? (
    <ArrowUpIcon size="0.8rem" />
  ) : (
    <ArrowDownIcon size="0.8rem" />
  );

  return (
    <Fragment>
      <StyledLinkButton onClick={onClick} text={text} />
      <ConditionalRender
        Component={<IconWrapper>{Icon}</IconWrapper>}
        shouldRender={isActive}
      />
    </Fragment>
  );
};

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
