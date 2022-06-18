import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: grid;
  height: 100%;
  background: rgb(6, 6, 6);
  overflow-x: hidden;
  hr {
    background: #b88746;
    width: 7.25%;
    @media (max-width: 720px) {
      margin: 1rem auto;
    }
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  background: rgb(6, 6, 6);
  @media (max-width: 1024px) {
    grid-template-columns: 10% 90%;
  }
  @media (max-width: 625px) {
    grid-template-columns: 15% 85%;
  }
`;

export default AppWrapper;
