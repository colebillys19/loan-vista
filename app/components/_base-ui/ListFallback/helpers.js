import React from 'react';

import ErrorBlock from 'components/_base-ui/ErrorBlock';
import NoDataBlock from 'components/_base-ui/NoDataBlock';
import Spinner from 'components/_base-ui/Spinner';

export const getComponent = (error, loading) => {
  if (error) {
    return <ErrorBlock error={error} />;
  }

  return loading ? <Spinner size="5rem" /> : <NoDataBlock />;
};
