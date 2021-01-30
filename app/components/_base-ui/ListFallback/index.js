import React from 'react';
import T from 'prop-types';

import Spinner from 'components/_base-ui/Spinner';

import { FallbackContainer } from './styledComponents';
import ErrorBlock from '../ErrorBlock';

const ListFallback = ({ error, loading }) => {
  if (error) {
    return (
      <FallbackContainer>
        <ErrorBlock error={error} />
      </FallbackContainer>
    );
  }

  if (loading) {
    return (
      <FallbackContainer>
        <Spinner size="5rem" />
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
