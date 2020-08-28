import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniLogo from "../../assets/img/minilogo.png";
import styled from 'styled-components';

class Navbar extends Component {
  state = {
    home: false,
    about: false,
    skills: false,
    project: false,
    contact: false
  };

  onNavClick = e => {
    let updatedState = { ...this.state };

    for (let key in updatedState) {
      updatedState[key] = false;
    }

    this.setState(prevState => updatedState);

    const attr = e.target.getAttribute("customattribute");

    this.setState(prevState => ({ [attr]: !prevState[attr] }));
  };

  render() {
    return (
      <SideNav>
        <Wrapper className="d-flex flex-column align-items-center">      
        <LogoContainer>
          <Link to="/">
            <LogoImage
              src={MiniLogo}
              alt="logo"
            />
          </Link>
        </LogoContainer>
        <NavContainer>
          <ItemNav name="home" to="/">
            <i
              onClick={this.onNavClick}
              style={this.state.home ? { color: "#b88746"} : null}
              customattribute="home"
              className={this.state.home ?  "fas fa-circle"  : "far fa-circle"}  
            ><br/>
            <label className={this.state.home ? "active" : null}>home</label>
            </i>
          </ItemNav>
          <ItemNav name="about" to="/about">
            <i
              onClick={this.onNavClick}
              style={this.state.about ? { color: "#b88746" } : null}
              customattribute="about"
              className={this.state.about ?  "fas fa-circle"  : "far fa-circle"}
            ><br/>
            <label className={this.state.about ? "active" : null}>about</label>
          </i>
          </ItemNav>
          <ItemNav name="skills" to="/skills">
            <i
              onClick={this.onNavClick}
              style={this.state.skills ? { color: "#b88746" } : null}
              customattribute="skills"
              className={this.state.skills ?  "fas fa-circle"  : "far fa-circle"}
            >
              <br/><label className={this.state.skills ? "active" : null}>capability</label>
          </i>
          </ItemNav>
          <ItemNav name="project"  to="/project">
            <i
              onClick={this.onNavClick}
              style={this.state.project ? { color: "#b88746" } : null}
              customattribute="project"
              className={this.state.project ?  "fas fa-circle"  : "far fa-circle"}
            >
              <br/><label className={this.state.project ? "active" : null}>projects</label>
          </i>
          </ItemNav>
          <ItemNav to="/contact">
            <i
              onClick={this.onNavClick}
              style={this.state.contact ? { color: "#b88746" } : null}
              customattribute="contact"
              className={this.state.contact ?  "fas fa-circle"  : "far fa-circle"}
            >
              <br/><label className={this.state.contact ? "active" : null}>contact</label>
          </i>
          </ItemNav>                    

          <SocialNav style={{ marginTop: "auto" }} href="https://www.linkedin.com/in/restuba">
            <i className="fab fa-linkedin-in" />
          </SocialNav>
          <SocialNav href="https://www.github.com/restuba">
            <i className="fab fa-github" />
          </SocialNav>
        </NavContainer>
        </Wrapper>
      </SideNav>
    );
  }
}

export default Navbar;

const SocialNav = styled.a`
  margin-top: 1.5rem;
    i{
        color: #777;
        font-size: 20px;
        opacity: 1;
        display: block;
        text-align: center;
    }
    i:hover{
        color: #b88746;
        opacity: 1;
        background-color: #b887469d;
        box-shadow: 0 0 5px #b88746, 0 0 20px #b88746, 0 0 40px #b88746;
        transition: 0.5s;
        color: whitesmoke;
        border-radius: 100%;
        transition: 0.5s;
    }
`;

const ItemNav = styled(Link)`
    margin-top: 1.5rem;
    :nth-child(1){
      margin-top: auto!important;
    }
    i{
        color: #777;
        font-size: 16px;
        opacity: 1;
        display: block;
        text-align: center;
        line-height: 0.9; 
    }
    i:hover{
        color: whitesmoke;
        transition: 0.5s;
        label{
            background-color: #b887469d;
            box-shadow: 0 0 5px #b88746, 0 0 20px #b88746, 0 0 40px #b88746;
            transition: 0.5s;
            color: whitesmoke;
        }
    }
    .active{
        background-color: #b887469d;
        box-shadow: 0 0 5px #b88746, 0 0 20px #b88746, 0 0 40px #b88746;
        transition: 0.5s;
        color: whitesmoke;
    }
    label{
        font-size: 12px;
        color: #777;
        cursor: pointer;
    }
`;

const SideNav = styled.div`
  height: 100%;
  z-index: 900;
`;

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    text-align-center;
    width: 5%;
    @media (max-width: 1024px){
      width: 10%;
    }
    @media (max-width: 625px){
      width: 15%;
    }
`;

const LogoContainer = styled.div`
    margin-top: 1rem;
`;

const LogoImage = styled.img`
    width: 2vw;
    min-width: 24px;
`;

const NavContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;