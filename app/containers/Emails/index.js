/**
 * Emails
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import EmailsView from 'components/EmailsView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEmails from './selectors';
import reducer from './reducer';
import saga from './saga';

export const Emails = () => {
  useInjectReducer({ key: 'emails', reducer });
  useInjectSaga({ key: 'emails', saga });

  return <EmailsView />;
};

Emails.propTypes = {};

const mapStateToProps = createStructuredSelector({
  emails: makeSelectEmails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Emails);
