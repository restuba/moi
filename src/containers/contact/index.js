import React from 'react';
import { ContactContainer, FormContainer, TitleSection } from './style';

const Index = () => {
  return (
    <ContactContainer className="animate__animated animate__fadeIn">
      <TitleSection>
        <h1>Contact</h1>
        <hr />
      </TitleSection>
      <FormContainer>
        <p>Got a project in mind? Okay, lets get started!</p>
        <p>
          <a
            // eslint-disable-next-line max-len
            href="https://github.com/restuba/me/raw/a082c8d9bb3e90de43e1fdd74455273469c42d77/src/assets/img/CV%20-%20Restu%20Bayu%20Aji.pdf"
            target=""
            rel=""
            download
          >
            {/* <Button>VIEW CV</Button> */}
          </a>
          <a
            href="mailto:resbayuaji@gmail.com"
            id="DisabledAutoHideExample"
            style={{ margin: '1rem' }}
          >
            {/* <Button text="HIRE ME">Email</Button> */}
          </a>
          resbayuaji.gmail.com
        </p>
      </FormContainer>
    </ContactContainer>
  );
};

export default Index;
