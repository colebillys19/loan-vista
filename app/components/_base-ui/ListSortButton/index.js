/**
 * ListSortButton
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import LinkButton from 'components/_base-ui/LinkButton';
import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';

import { ContentContainer } from './styledComponents';

const ListSortButton = ({ isActive, isDescending, onClick, text }) => {
  const Icon = isDescending ? (
    <ArrowDownIcon size="1rem" />
  ) : (
    <ArrowUpIcon size="1rem" />
  );

  return (
    <ContentContainer isActive={isActive}>
      <LinkButton onClick={onClick} text={text} />
      <ConditionalRender Component={Icon} shouldRender={isActive} />
    </ContentContainer>
  );
};

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isDescending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
