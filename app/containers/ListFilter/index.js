/**
 * ListFilter
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';

import reducer from './reducer';

export const ListFilter = () => {
  useInjectReducer({ key: 'calls', reducer });

  return <div />;
};

ListFilter.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({}); // eslint-disable-line

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListFilter);
