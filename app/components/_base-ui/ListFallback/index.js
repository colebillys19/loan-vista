/**
 * ListFallback
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/icons';

import Spinner from 'components/_base-ui/Spinner';

import { FallbackContainer, IconContainer } from './styledComponents';

const ListFallback = ({ error, loading }) => {
  if (error) {
    return (
      <FallbackContainer>
        <IconContainer>
          <WarningIcon size="8rem" />
        </IconContainer>
        {error}
      </FallbackContainer>
    );
  }

  if (loading) {
    return (
      <FallbackContainer>
        <Spinner />
      </FallbackContainer>
    );
  }

  return <FallbackContainer>no data to display</FallbackContainer>;
};

ListFallback.propTypes = {
  error: T.oneOfType([T.bool, T.string]),
  loading: T.bool.isRequired,
};

export default ListFallback;
