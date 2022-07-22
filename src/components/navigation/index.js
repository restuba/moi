import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Wrapper, { NavList } from './style';
import { navRoutes } from './navigation.config';
import Typography from '../typography';

const Navigation = (props) => {
  const { toggleMenu, onCursor, setToggleMenu } = props;
  const onClickNavItem = (id) => {
    setToggleMenu(false);
    const element = document.getElementById(id);
    if (element) {
      window.scroll({ top: element.offsetTop / 2, behavior: 'smooth' });
      const container = document.getElementById('container_scroll');
      container.style.transform = `translateY(${-element.offsetTop}px)`;
      container.style.WebkitTransform = `translateY(${-element.offsetTop}px)`;
    }
  };
  return (
    <AnimatePresence>
      {toggleMenu && (
        <Wrapper
          initial={{ x: '-100%' }}
          exit={{ x: '-100%' }}
          animate={{ x: toggleMenu ? 0 : '-100%' }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <NavList>
            <div className="component_nav_list">
              {navRoutes.map((route) => {
                return (
                  <div
                    key={route.id}
                    onMouseEnter={() => {
                      onCursor('hovered');
                    }}
                    onMouseLeave={onCursor}
                    className="component_nav_list_item"
                  >
                    <div
                      aria-hidden="true"
                      className="link"
                      onClick={() => {
                        onClickNavItem(route.id);
                      }}
                    >
                      <Typography size={{ sm: 2, md: 3 }} weight={700} fit>
                        {route.label}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </NavList>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
