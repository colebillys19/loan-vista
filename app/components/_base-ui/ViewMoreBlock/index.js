import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { ViewMoreContainer } from './styledComponents';

const ViewMoreBlock = ({ isActive, navigate }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate();
  };

  return (
    <ViewMoreContainer isActive={isActive}>
      <LinkButton onClick={handleClick} text="View More" />
    </ViewMoreContainer>
  );
};

ViewMoreBlock.propTypes = {
  isActive: T.bool.isRequired,
  navigate: T.func.isRequired,
};

export default ViewMoreBlock;
