import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { throttle } from 'lodash';

import { ArrowUpIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import { StyledIconButton } from './styledComponents';

const BackToTopButton = ({ pathname }) => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));

    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 300));
    };
  }, []);

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  const shouldRender =
    ['/calls', '/documents', '/payments'].includes(pathname) &&
    scrollValue >= 230;

  return (
    <ConditionalRender
      Component={
        <StyledIconButton onClick={() => window.scrollTo(0, 0)}>
          <ArrowUpIcon size="3.6rem" />
        </StyledIconButton>
      }
      shouldRender={shouldRender}
    />
  );
};

BackToTopButton.propTypes = { pathname: T.string.isRequired };

export default BackToTopButton;
