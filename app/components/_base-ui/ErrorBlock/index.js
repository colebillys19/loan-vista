import React, { Fragment } from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/icons';

import { Message } from './styledComponents';

const ErrorBlock = ({ error }) => (
  <Fragment>
    <WarningIcon size="10rem" />
    <Message>{error}</Message>
    <Message>Please refresh the page.</Message>
  </Fragment>
);

ErrorBlock.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default ErrorBlock;
