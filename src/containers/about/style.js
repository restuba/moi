import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  background: rgb(6, 6, 6);
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 820px) {
    display: grid;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 425px) {
    text-align: center;
    padding: 0;
  }
`;

export const TitleSection = styled.div`
  flex: 2;
  padding: 20px;
  h1 {
    color: #b88746;
    @media (max-width: 812px) {
      font-size: 32px;
    }
  }
  h6 {
    line-height: 2.5rem;
    @media (max-width: 812px) {
      font-size: 16px;
    }
  }
  hr {
    width: 40px;
  }
`;

export const ContentSection = styled.section`
  flex: 1;
  padding: 20px;
`;

export const Banner = styled.img`
  overflow: hidden;
  width: 48vw;
  @media (max-width: 720px) {
    width: 270px;
  }
`;
