import styled from 'styled-components';

const Index = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 12px;
  color: #b88746;
  border: 1px solid #b88746;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 12px;
  overflow: hidden;
  transition: 0.2s;
  background: transparent;
  :hover {
    color: white;
    background: #b88746;
    box-shadow: 0 0 10px #b88746, 0 0 40px #b88746, 0 0 80px #b88746;
    border: 1px solid #b88746;
    transition: 0.5s;
  }
`;

export default Index;
