import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { ViewMoreContainer } from './styledComponents';

const ViewMoreBlock = ({ isActive, route }) => {
  const handleClick = () => {
    console.log(route); // eslint-disable-line
  };

  return (
    <ViewMoreContainer isActive={isActive}>
      <LinkButton onClick={handleClick} text="View More" />
    </ViewMoreContainer>
  );
};

ViewMoreBlock.propTypes = {
  isActive: T.bool.isRequired,
  route: T.string.isRequired,
};

export default ViewMoreBlock;
