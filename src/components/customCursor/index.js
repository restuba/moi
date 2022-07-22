import React, { useEffect, useRef } from 'react';
import { useGlobalStateContext } from '../../context/globalContext';
import Wrapper from './style';

const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    if (cursor.current) {
      cursor.current.style.left = `${clientX}px`;
      cursor.current.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <Wrapper
      // eslint-disable-next-line no-extra-boolean-cast
      className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
      ref={cursor}
    />
  );
};

export default CustomCursor;
