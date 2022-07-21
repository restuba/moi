import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import Wrapper, { Logo, Menu } from './style';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';
import CustomCursor from '../customCursor';
import Navigation from '../navigation';
import colors from '../../configs/colors';
import IntroOverlay from '../introOverlay';

const tl = gsap.timeline();

const animation = (onComplete) => {
  tl.to('.overlay-top', 1.6, {
    height: 0,
    ease: 'expo.inOut',
    stagger: 0.4,
    delay: 1.8,
  }).to('.intro-overlay', {
    css: { display: 'none' },
    onComplete,
  });
};

const Index = (props) => {
  const { children } = props;

  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, currentTheme } = useGlobalStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useLayoutEffect(() => {
    animation(setAnimationComplete);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const darkTheme = {
    background: colors.black,
    text: colors.white,
  };

  const lightTheme = {
    background: colors.white,
    text: colors.black,
  };

  const onCursor = (cursorType) => {
    const cursor = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursor });
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <CustomCursor toggleMenu={toggleMenu} />
      <Wrapper open={toggleMenu}>
        <div className="component_background" />
        <Navigation
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          onCursor={onCursor}
        />
        {animationComplete === false ? <IntroOverlay /> : ''}
        <div className="component_sidebar_wrapper">
          <div className="component_logo_wrapper">
            <Logo>
              M
              <span
                aria-hidden="true"
                className="component_logo_highlight"
                onMouseEnter={() => {
                  onCursor('hovered');
                }}
                onMouseLeave={onCursor}
                onClick={toggleTheme}
              >
                O
              </span>
              I
            </Logo>
          </div>
          <Menu
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            onMouseEnter={() => {
              onCursor('hovered');
            }}
            onMouseLeave={onCursor}
            open={toggleMenu}
          >
            <button type="button">
              <span className="menu_line" />
              <span className="menu_line" />
            </button>
          </Menu>
          <div className="component_menu_scroll">
            <div>Scroll</div>
            <div className="component_scroll_line" />
          </div>
        </div>
        <div className="component_children_wrapper">{children}</div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Index;
