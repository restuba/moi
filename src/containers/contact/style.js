import styled from 'styled-components';

export const ContactContainer = styled.div`
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

export const FormContainer = styled.div`
  padding: 0 20px;
`;
