import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';
import colors from '../../configs/colors';

const Wrapper = styled.div`
  transition: 0.6s background-color ease-out;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => {
    return theme.background;
  }};
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  .component_sidebar_wrapper {
    position: fixed;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 100px;
    justify-content: space-between;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
    box-sizing: content-box;
    .component_logo_wrapper {
      margin-top: 40px;
    }
    .component_menu_scroll {
      color: ${({ theme }) => {
        return theme.text;
      }};
      position: relative;
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: uppercase;
      writing-mode: vertical-lr;
      .component_scroll_line {
        height: 10vh;
        overflow: hidden;
        width: 1px;
        background-color: ${({ theme }) => {
          return theme.text;
        }};
      }
    }
    .component_logo_wrapper,
    .component_menu_scroll {
      transition: all 0.3s ease-in;
      opacity: ${({ open }) => {
        return open ? '0' : '1';
      }};
    }
  }
  .component_children_wrapper {
    display: grid;
    width: calc(100vw - 80px);
    margin-left: 80px;
    padding: 24px;
    box-sizing: border-box;
  }
  .circle {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  .circle.sm {
    width: 30px;
    height: 30px;
  }

  .circle.md {
    width: 60px;
    height: 60px;
  }

  .circle.lg {
    width: 90px;
    height: 90px;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_sidebar_wrapper {
      width: 120px;
    }
    .component_children_wrapper {
      width: calc(100vw - 120px);
      margin-left: 120px;
      padding: 40px;
    }
  }
`;

export default Wrapper;

export const Logo = styled(motion.div)`
  color: ${({ theme }) => {
    return theme.text;
  }};
  font-size: 28px;
  font-weight: 900;
  .component_logo_highlight {
    transition: color 0.3s ease;
    :hover {
      color: ${colors.primary};
    }
  }
  img {
    width: 80px;
  }
`;

export const Menu = styled(motion.div)`
  color: ${({ theme }) => {
    return theme.text;
  }};
  position: fixed;
  top: 50%;
  /* left: 16px; */
  transform: translateY(-50%);
  font-size: 2rem;
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 11px;
      width: 36px;
      height: 2px;
      display: block;
      background: ${({ theme, open }) => {
        return open ? theme.background : theme.text;
      }};
      margin: 8px;
      :first-child {
        transform: ${({ open }) => {
          return open ? 'rotate(45deg)' : 'rotate(0)';
        }};
      }
      :nth-child(2) {
        transform: ${({ open }) => {
          return open ? 'rotate(-45deg)' : 'rotate(0)';
        }};
      }
    }
  }
`;
