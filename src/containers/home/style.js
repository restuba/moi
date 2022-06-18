import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  background: rgb(6, 6, 6);
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 720px) {
    display: grid;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const Greeting = styled.div`
  flex: 2;
  padding: 20px;
  h1 {
    @media (max-width: 812px) {
      font-size: 32px;
    }
  }
  h6 {
    @media (max-width: 812px) {
      font-size: 16px;
    }
  }
  hr {
    width: 40px;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Banner = styled.img`
  overflow: hidden;
  border-radius: 100%;
  width: 320px;
  animation-name: breath-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  @keyframes breath-animation {
    0% {
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.8),
        0 0 2px rgba(255, 255, 255, 0.8), 0 0 11px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(184, 135, 70.8), 0 0 30px rgba(184, 135, 70.8),
        0 0 40px rgba(184, 135, 70.5);
    }
    100% {
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.8),
        0 0 2px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.8),
        0 0 10px rgba(184, 135, 70.8), 0 0 15px rgba(0, 0, 70.8);
    }
  }
  @media (max-width: 625px) {
    width: 170px;
  }
`;
