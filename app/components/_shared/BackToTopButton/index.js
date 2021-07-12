import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

import ConditionalRender from 'components/_shared/ConditionalRender';

import { StyledArrowButton } from './styledComponents';

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
        <StyledArrowButton
          disableRipple={false}
          handleClick={handleClick}
          renderUp
          size="2.4rem"
        />
      }
      shouldRender={scrollValue >= 230}
    />
  );
};

export default BackToTopButton;
