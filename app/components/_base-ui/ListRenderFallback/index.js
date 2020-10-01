/**
 * ListRenderFallback
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/icons';
import { errorColor } from 'styleConstants';

import {
  ErrorContainer,
  IconContainer,
  MessageContainer,
} from './styledComponents';

const ListRenderFallback = ({ error }) =>
  error ? (
    <ErrorContainer>
      <IconContainer>
        <WarningIcon colorA={errorColor} colorB={errorColor} size="8rem" />
      </IconContainer>
      {error}
    </ErrorContainer>
  ) : (
    <MessageContainer>no data to display</MessageContainer>
  );

ListRenderFallback.propTypes = { error: T.oneOfType([T.bool, T.string]) };

export default ListRenderFallback;
