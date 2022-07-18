import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';
import colors from '../../configs/colors';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  margin-bottom: 40px;
  .component_banner_main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: clamp(60px, 12vw, 15vw);
      font-weight: 700;
      text-transform: uppercase;
      color: ${colors.primary};
      mix-blend-mode: difference !important;
      text-align: center;
      .line {
        height: 200px;
        position: relative;
        overflow-y: hidden;
        display: flex;
        align-items: center;
        span {
          position: absolute;
          left: 50%;
          white-space: nowrap;
          transform: skewY(7deg) translate(-50%, 200px);
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_banner_main {
      h1 {
        font-size: clamp(80px, 12vw, 15vw);
      }
    }
  }
`;

export default Wrapper;
