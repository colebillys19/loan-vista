/**
 * Emails
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import EmailsView from 'components/EmailsView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEmails, { makeSelectEmailsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchEmailsData, onUnmount } from './actions';

export const Emails = ({
  emailsData,
  dispatchFetchEmailsData,
  dispatchOnUnmount,
  loading,
}) => {
  useInjectReducer({ key: 'emails', reducer });
  useInjectSaga({ key: 'emails', saga });

  useEffect(() => {
    dispatchFetchEmailsData();

    return () => {
      dispatchOnUnmount();
    };
  }, []);

  return <EmailsView emailsData={emailsData} loading={loading} />;
};

Emails.propTypes = {
  emailsData: T.array.isRequired,
  dispatchFetchEmailsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  loading: T.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailsData: makeSelectEmailsData(),
  loading: makeSelectEmails('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchEmailsData: () => dispatch(fetchEmailsData()),
  dispatchOnUnmount: () => dispatch(onUnmount()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Emails);
