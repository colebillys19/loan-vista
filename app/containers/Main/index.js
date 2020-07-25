/**
 * Main
 * @description ...
 */

import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMain from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sidebarHeaderData, sidebarSummaryData } from './mockData';

export const Main = ({ render }) => {
  useInjectReducer({ key: 'main', reducer });
  useInjectSaga({ key: 'main', saga });

  return render({ sidebarHeaderData, sidebarSummaryData });
};

Main.propTypes = { render: T.func.isRequired };

const mapStateToProps = createStructuredSelector({
  main: makeSelectMain(),
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

export default compose(withConnect)(Main);