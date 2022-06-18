import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MiniLogo from '../../assets/img/minilogo.png';
import { menus, socialMenus } from './navbar.config';
import {
  ItemNav,
  LogoContainer,
  LogoImage,
  NavContainer,
  SideNav,
  SocialNav,
  Wrapper,
} from './style';

const Index = () => {
  const { pathname } = useLocation();

  const activeMenu = (itemPath) => {
    if (itemPath === pathname) {
      return { className: 'fas fa-circle', color: '#b88746' };
    }
    return { className: 'far fa-circle', color: null };
  };

  return (
    <SideNav>
      <Wrapper className="d-flex flex-column align-items-center">
        <LogoContainer>
          <Link to="/">
            <LogoImage src={MiniLogo} alt="logo" />
          </Link>
        </LogoContainer>
        <NavContainer>
          <div>
            {menus.map((item) => {
              return (
                <ItemNav key={item.to} to={item.to}>
                  <i
                    style={{ color: activeMenu(item.to).color }}
                    className={activeMenu(item.to).className}
                  >
                    <br />
                    <div className="component_nav_item_label">{item.label}</div>
                  </i>
                </ItemNav>
              );
            })}
          </div>
          <div>
            {socialMenus.map((item) => {
              return (
                <SocialNav
                  key={item.to}
                  href={item.to}
                  className="component_nav_item_social_media"
                >
                  <i className={item.icon} />
                </SocialNav>
              );
            })}
          </div>
        </NavContainer>
      </Wrapper>
    </SideNav>
  );
};

export default Index;
