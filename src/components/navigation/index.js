import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Wrapper, { NavList } from './style';
import { navRoutes } from './navigation.config';
import Typography from '../typography';

const Navigation = ({ toggleMenu, onCursor, setToggleMenu }) => {
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
                    key={route.path}
                    onMouseEnter={() => {
                      onCursor('pointer');
                    }}
                    onMouseLeave={onCursor}
                    className="component_nav_list_item"
                  >
                    <Link
                      to={route.path}
                      onClick={() => {
                        setToggleMenu(false);
                      }}
                    >
                      <div className="link">
                        <Typography size={{ sm: 2, md: 3 }} weight={700} fit>
                          {route.label}
                        </Typography>
                      </div>
                    </Link>
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
