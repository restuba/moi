import React, { Component } from "react";
import FormContact from "./FormContact";
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <ContactContainer className="animate__animated animate__fadeIn">
          <TitleSection>
            <h1>Contact</h1>
            <hr/>
          </TitleSection>
          <FormContainer>
            <FormContact/>
          </FormContainer>
      </ContactContainer>
    )
  }
}
export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media (max-width: 720px){
    text-align: center;
  }
`;

const TitleSection = styled.div`
  padding: 20px;
  h1{
    color: #b88746;
  }
`;

const FormContainer = styled.div`
  padding:0 20px;
`;
