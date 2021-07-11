import React from 'react';
import T from 'prop-types';

import { iconColorC, textColorB } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import Spinner from 'components/_shared/Spinner';

import Button from './Button';

const ListSortButton = ({ isActive, isAscending, loading, onClick, text }) => (
  <ConditionalRender
    Component={
      <Button
        isActive={isActive}
        isAscending={isAscending}
        loading={loading}
        onClick={onClick}
        text={text}
      />
    }
    FallbackComponent={
      <Spinner color={isActive ? iconColorC : textColorB} size="1.7rem" />
    }
    shouldRender={!loading}
  />
);

ListSortButton.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  loading: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default ListSortButton;
