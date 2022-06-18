import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialNav = styled.a`
  margin-top: 1.5rem;
  i {
    color: #777;
    font-size: 20px;
    opacity: 1;
    display: block;
    text-align: center;
  }
  i:hover {
    color: #b88746;
    opacity: 1;
    background-color: #b887469d;
    box-shadow: 0 0 5px #b88746, 0 0 20px #b88746, 0 0 40px #b88746;
    transition: 0.5s;
    color: whitesmoke;
    border-radius: 100%;
    transition: 0.5s;
  }
`;

export const ItemNav = styled(Link)`
  margin-top: 1.5rem;
  color: unset;
  :nth-child(1) {
    margin-top: auto !important;
  }
  i {
    color: #777;
    font-size: 16px;
    opacity: 1;
    display: block;
    text-align: center;
    line-height: 0.9;
    text-decoration: none;
  }
  i:hover {
    color: #b887469d;
    transition: 0.5s;
    .component_nav_item_label {
      color: whitesmoke;
    }
  }
  .active {
    background-color: #b887469d;
    box-shadow: 0 0 5px #b88746, 0 0 20px #b88746, 0 0 40px #b88746;
    transition: 0.5s;
    color: whitesmoke;
  }
  .component_nav_item_label {
    font-size: 12px;
    color: #777;
    margin-top: 4px;
    cursor: pointer;
  }
`;

export const SideNav = styled.div`
  height: 100%;
  z-index: 900;
`;

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 5%;
  @media (max-width: 1024px) {
    width: 10%;
  }
  @media (max-width: 625px) {
    width: 15%;
  }
`;

export const LogoContainer = styled.div`
  margin-top: 1rem;
`;

export const LogoImage = styled.img`
  width: 2vw;
  min-width: 24px;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
  }
`;
