import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Logo from "../../assets/img/largelogo.png";
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (  
        <HomeContainer  className="animate__animated animate__fadeIn">
          <Greeting>
            <h1>HI.</h1>
            <h1>I'm Restu Bayu Aji</h1>
            <hr/>
            <h6 style={{ color: "#777", letterSpacing: "3px" }}>
              Front-end Developer / UI Developer{" "}
            </h6>
            <div className="mt-4">
              <Link to="/contact">
                <Button text="CONTACT ME" />
              </Link>
            </div>
          </Greeting>
          <LogoContainer>
            <Banner
              src={Logo}
              alt="reactlogo"
              className="circle"
            />            
          </LogoContainer>
        </HomeContainer>
    )
  }
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  background: rgb(6, 6, 6);
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 720px){
    display: grid;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 425px){
    text-align: center;
  }
`;

const Greeting = styled.div`
  flex: 2;
  padding: 20px;
  h1{
    @media (max-width: 812px){
      font-size: 32px;
    }
  }
  h6{
    @media (max-width: 812px){
      font-size: 16px;
    }
  }
  hr{
    width: 40px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Banner = styled.img`
  overflow: hidden;
  border-radius: 100%;
  width: 320px;
  animation-name: breath-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  @keyframes breath-animation {
    0% {
      box-shadow: 0 0 1px rgba(255,255,255,.8),
                    0 0 2px rgba(255,255,255,.8),
                    0 0 11px  rgba(255,255,255,.8),
                    0 0 20px  rgba(184, 135, 70.8),
                    0 0 30px  rgba(184, 135, 70.8),
                    0 0 40px  rgba(184, 135, 70.5);

    }
    100% {
      box-shadow: 0 0 1px rgba(255,255,255,.8),
                    0 0 2px rgba(255,255,255,.8),
                    0 0 5px rgba(255,255,255,.8),
                    0 0 10px rgba(184, 135, 70.8),
                    0 0 15px rgba(0,0, 70.8);
    }
  }
  @media (max-width: 625px){
    width: 170px;
  }
`;