import styled from 'styled-components';
import colors from '../../configs/colors';

const Wrapper = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: ${colors.primary};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid
      ${({ theme }) => {
        return theme.text;
      }} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${colors.primary};
    border: 4px solid ${colors.primary};
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid
      ${({ theme }) => {
        return theme.text;
      }} !important;
    top: ${({ theme }) => {
      return theme.top;
    }} !important;
    left: ${({ theme }) => {
      return theme.text;
    }} !important;
  }
  &.nav-open {
    background: ${({ theme }) => {
      return theme.text;
    }};
  }

  &.nav-open,
  &.locked {
    border: 4px solid
      ${({ theme }) => {
        return theme.text;
      }} !important;
  }
`;

export default Wrapper;
