/**
 * Main
 * @description ...
 */

import { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMain from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchLoanData } from './actions';
import { sidebarHeaderData, sidebarSummaryData } from './mockData';

export const Main = ({ dispatchFetchLoanData, loanData, render }) => {
  useInjectReducer({ key: 'main', reducer });
  useInjectSaga({ key: 'main', saga });

  useEffect(() => {
    dispatchFetchLoanData();
  }, []);

  if (loanData === 'thing') {
    console.log('yo');
  }

  return render({ sidebarHeaderData, sidebarSummaryData });
};

Main.propTypes = {
  dispatchFetchLoanData: T.func.isRequired,
  loanData: T.object.isRequired,
  render: T.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loanData: makeSelectMain('loanData'),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchLoanData: (loanNumber) => dispatch(fetchLoanData(loanNumber)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Main);
