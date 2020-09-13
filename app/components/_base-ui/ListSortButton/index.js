/**
 * ListSortButton
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

// import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';
import { appColorA, textColorB } from 'styleConstants';

import {
  ButtonContainer,
  IconWrapper,
  StyledLinkButton,
} from './styledComponents';

const ListSortButton = ({ isActive, isAscending, onClick, text }) => {
  const Icon = isAscending ? (
    <ArrowUpIcon color={isActive ? appColorA : textColorB} size="0.8rem" />
  ) : (
    <ArrowDownIcon color={isActive ? appColorA : textColorB} size="0.8rem" />
  );

  return (
    <ButtonContainer>
      <StyledLinkButton isActive={isActive} onClick={onClick} text={text} />
      <IconWrapper>{Icon}</IconWrapper>
    </ButtonContainer>
  );
  // return (
  //   <ButtonContainer>
  //     <StyledLinkButton onClick={onClick} text={text} />
  //     <ConditionalRender
  //       Component={<IconWrapper>{Icon}</IconWrapper>}
  //       shouldRender={isActive}
  //     />
  //   </ButtonContainer>
  // );
};

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
