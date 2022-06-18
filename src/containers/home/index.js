import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import Logo from '../../assets/img/largelogo.png';
import { Banner, Greeting, HomeContainer, LogoContainer } from './style';

const Index = () => {
  return (
    <HomeContainer className="animate__animated animate__fadeIn">
      <Greeting>
        <h1>HI.</h1>
        <h1>I&apos;m Restu Bayu Aji</h1>
        <hr />
        <h6 style={{ color: '#777', letterSpacing: '3px' }}>
          Front-end Developer / UI Developer
        </h6>
        <div className="mt-4">
          <Link to="/contact">
            <Button>CONTACT ME</Button>
          </Link>
        </div>
      </Greeting>
      <LogoContainer>
        <Banner src={Logo} alt="reactlogo" className="circle" />
      </LogoContainer>
    </HomeContainer>
  );
};

export default Index;
