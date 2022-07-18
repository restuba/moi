import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';
import { variants } from '../../configs/fonts';

const Wrapper = styled.div`
  display: ${({ block }) => {
    return block ? 'block' : 'inline-block';
  }};
  .component_font {
    color: ${({ theme, color, fit }) => {
      if (fit) return theme.background;
      return color || theme.text;
    }};
    font-size: ${({ size, unit, variant = {} }) => {
      const getVariant = variants[variant?.sm];
      if (getVariant) return getVariant['font-size'] + unit;
      return size.sm + unit;
    }};
    line-height: ${({ variant = {} }) => {
      const getVariant = variants[variant?.sm];
      if (getVariant) return getVariant['line-height'];
      return 'normal';
    }};
    font-weight: ${({ weight }) => {
      return weight;
    }};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_font {
      font-size: ${({ size, unit, variant = {} }) => {
        const getVariant = variants[variant?.md];
        if (getVariant) return getVariant['font-size'] + unit;
        return size?.md + unit;
      }};
      line-height: ${({ variant = {} }) => {
        const getVariant = variants[variant?.sm];
        if (getVariant) return getVariant['line-height'];
        return 'normal';
      }};
    }
  }
`;

export default Wrapper;
