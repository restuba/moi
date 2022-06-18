import React from 'react';
import ImageBanner from '../../assets/img/20180602205731.jpg';
import { AboutContainer, Banner, ContentSection, TitleSection } from './style';

const Index = () => {
  return (
    <AboutContainer className="animate__animated animate__fadeIn">
      <TitleSection>
        <h1>About Me</h1>
        <hr />
        <h6>
          I&apos;m graduate of Informatics Engineering - Telkom University. with
          passionate creative enthusiastic and always try to learn, i&apos;ve
          expertise in develop website and app so really quality and unique.
        </h6>
      </TitleSection>
      <ContentSection>
        <Banner src={ImageBanner} alt="" />
      </ContentSection>
    </AboutContainer>
  );
};

export default Index;
