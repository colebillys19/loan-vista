import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { ViewMoreContainer } from './styledComponents';

const ViewMoreBlock = ({ route }) => {
  const handleClick = () => {
    console.log(route); // eslint-disable-line
  };

  return (
    <ViewMoreContainer>
      <LinkButton onClick={handleClick} text="View More" />
    </ViewMoreContainer>
  );
};

ViewMoreBlock.propTypes = { route: T.string.isRequired };

export default ViewMoreBlock;
