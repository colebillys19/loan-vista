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
import { makeSelectPathname } from 'containers/App/selectors';

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
  pathname,
}) => {
  useInjectReducer({ key: 'emails', reducer });
  useInjectSaga({ key: 'emails', saga });

  useEffect(() => {
    dispatchFetchEmailsData();

    return () => {
      dispatchOnUnmount();
    };
  }, []);

  return (
    <EmailsView emailsData={emailsData} loading={loading} pathname={pathname} />
  );
};

Emails.propTypes = {
  emailsData: T.array.isRequired,
  dispatchFetchEmailsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  loading: T.bool.isRequired,
  pathname: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailsData: makeSelectEmailsData(),
  loading: makeSelectEmails('loading'),
  pathname: makeSelectPathname(),
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
