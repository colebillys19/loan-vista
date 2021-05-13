import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

import { ArrowUpIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import { StyledIconButton } from './styledComponents';

const BackToTopButton = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    window.addEventListener('scroll', throttle(handleScroll, 300));

    return () => {
      isMountedRef.current = false;
      window.removeEventListener('scroll', throttle(handleScroll, 300));
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
  };

  const handleScroll = () => {
    if (isMountedRef.current) {
      setScrollValue(window.scrollY);
    }
  };

  return (
    <ConditionalRender
      Component={
        <StyledIconButton onClick={handleClick}>
          <ArrowUpIcon size="3.6rem" />
        </StyledIconButton>
      }
      shouldRender={scrollValue >= 230}
    />
  );
};

export default BackToTopButton;
