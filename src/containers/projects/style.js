import styled from 'styled-components';

export const ProjectContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 425px) {
    padding: 0px;
  }
  @media (max-width: 720px) {
    text-align: center;
    padding: 0;
  }
`;

export const TitleSection = styled.div`
  padding: 20px;
  h1 {
    color: #b88746;
  }
`;

export const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  padding: 24px;
  background: #111;
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  p {
    line-height: 2.5;
  }
  div {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 20px;
    }
    h6 {
      font-size: 12px;
      line-height: 1.5rem;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const DescItem = styled.div`
  margin: auto 0;
  img {
    width: 100%;
  }
`;
