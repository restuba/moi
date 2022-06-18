import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const TitleSection = styled.div`
  padding: 20px;
  h1 {
    color: #b88746;
  }
`;

export const DescSection = styled.div`
  padding: 20px;
  p {
    line-height: 2rem;
  }
`;

export const TableSection = styled.div`
  hr {
    width: 40px;
    background: #b88746;
  }
  table {
    width: 100%;
    border: none;
    th,
    td {
      text-align: left;
      padding: 8px;
    }
    @media (max-width: 375px) {
      th {
        display: none;
      }
    }
  }
`;
