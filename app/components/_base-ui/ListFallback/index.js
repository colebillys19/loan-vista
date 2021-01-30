import React from 'react';
import T from 'prop-types';

import { FallbackContainer } from './styledComponents';
import { getComponent } from './helpers';

const ListFallback = ({ error, loading }) => (
  <FallbackContainer>{getComponent(error, loading)}</FallbackContainer>
);

ListFallback.propTypes = {
  error: T.oneOfType([T.bool, T.string]),
  loading: T.bool.isRequired,
};

export default ListFallback;
