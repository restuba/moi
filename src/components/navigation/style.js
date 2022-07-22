import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${({ theme }) => {
    return theme.text;
  }};
  z-index: 100;
  overflow: hidden;
`;

export default Wrapper;

export const NavList = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .component_nav_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    gap: 5vh;
  }
  .component_nav_list_item {
    display: flex;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;
    height: 96px;
    line-height: 96px;
    overflow: hidden;
    .link {
      color: ${({ theme }) => {
        return theme.background;
      }};
    }
  }
`;
