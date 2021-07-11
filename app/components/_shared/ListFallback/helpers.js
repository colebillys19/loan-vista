import React from 'react';

import ErrorBlock from 'components/_shared/ErrorBlock';
import NoDataBlock from 'components/_shared/NoDataBlock';
import Spinner from 'components/_shared/Spinner';

export const getComponent = (error, loading) => {
  if (error) {
    return <ErrorBlock error={error} />;
  }

  return loading ? <Spinner size="5rem" /> : <NoDataBlock />;
};
