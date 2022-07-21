/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useCallback } from 'react';
import { setTransform, setStyles } from '../../utils/commonUtils';

export default ({ children }) => {
  const container = useRef(null);
  const ease = 0.075;
  let yCurrent = 0;
  let yScroll = 0;
  let animationFrame;

  const cancelAnimation = () => {
    yCurrent = yScroll;
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  };

  const animate = () => {
    const diff = yScroll - yCurrent;
    const delta = Math.abs(diff) < 0.1 ? 0 : diff * ease;
    if (delta) {
      yCurrent += delta;
      yCurrent = parseFloat(yCurrent.toFixed(2));
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimation();
    }
    setTransform(container.current, `translateY(${-yCurrent}px)`);
  };

  const startAnimation = () => {
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(animate);
    }
  };
  const updateScroll = useCallback(() => {
    yScroll = window.scrollY || window.pageYOffset;
    startAnimation();
  }, []);

  const init = useCallback(() => {
    yScroll = window.scrollY || window.pageYOffset;
    yCurrent = yScroll;
    setStyles(container.current);
    startAnimation();
  }, []);

  const resize = useCallback(() => {
    yScroll = window.scrollY || window.pageYOffset;
    yCurrent = yScroll;
    setStyles(container.current);
    startAnimation();
  }, []);

  useEffect(() => {
    init();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateScroll);
    };
  }, [init, resize, updateScroll]);

  return <div ref={container}>{children}</div>;
};
