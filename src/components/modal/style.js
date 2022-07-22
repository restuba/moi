import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

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
  .component_modal_main {
    height: 100vh;
    padding: 20px 20px 20px 80px;
    display: grid;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    .component_modal_close {
      position: fixed;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      button {
        transform-origin: center;
        border: none;
        background: none;
        outline: none;
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 10px;
        span {
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 9.9px;
          width: 36px;
          height: 2px;
          display: block;
          background: ${({ theme }) => {
            return theme.background;
          }};
          :first-child {
            transform: rotate(45deg);
          }
          :nth-child(2) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_modal_main {
      padding: 40px 40px 40px 120px;
      .component_modal_close {
        left: 40px;
      }
    }
  }
`;

export default Wrapper;
