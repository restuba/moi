import React, { Component } from "react";
import styled from 'styled-components';
import ImageBanner  from '../../assets/img/20180602205731.jpg';

class About extends Component {
  render() {
    return (
      <AboutContainer className="animate__animated animate__fadeIn">
        <TitleSection>
          <h1>About Me</h1>
          <hr />
          <h6>
          I'm graduate of Informatics Engineering - Telkom University. with passionate creative enthusiastic and always try to learn, i've expertise in develop website and app so really quality and unique.
          </h6>
        </TitleSection>
        <ContentSection>
          <Banner src={ImageBanner} alt="" />
        </ContentSection>
      </AboutContainer>
    )
  }
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  background: rgb(6, 6, 6);
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 820px){
    display: grid;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 425px){
    text-align: center;
    padding: 0;
  }
`;

const TitleSection = styled.div`
  flex: 2;
  padding: 20px;
  h1{
    color: #b88746;
    @media (max-width: 812px){
      font-size: 32px;
    }
  }
  h6{
    line-height: 2.5rem;
    @media (max-width: 812px){
      font-size: 16px;
    }
  }
  hr{
    width: 40px;
  }
`;

const ContentSection = styled.section`
  flex: 1;
  padding: 20px;

`;

const Banner = styled.img`
  overflow: hidden;
  width: 48vw;
  @media (max-width: 720px){
    width: 270px;
  }
`;