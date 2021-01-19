import React from 'react';
import T from 'prop-types';

import DefaultButton from './DefaultButton';
import LoadingButton from './LoadingButton';

const ListSortButton = ({ isActive, isAscending, loading, onClick, text }) =>
  !loading ? (
    <DefaultButton
      isActive={isActive}
      isAscending={isAscending}
      onClick={onClick}
      text={text}
    />
  ) : (
    <LoadingButton />
  );

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  loading: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
