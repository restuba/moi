import styled from 'styled-components';

const Wrapper = styled.div`
  .top {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    .overlay-top {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: ${({ theme }) => {
        return theme.text;
      }};
      bottom: 0;
      left: 0;
      right: 0;
      &:nth-child(2) {
        left: 33.333%;
      }
      &:nth-child(3) {
        left: 66.666%;
      }
    }
  }
`;

export default Wrapper;
