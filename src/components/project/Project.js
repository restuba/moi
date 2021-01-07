import React, { Component } from "react";
import ProjectItem from "./projectItem/ProjectItem";
import LegaUI from "../../assets/img/lega-ui.png";
import Costumy from "../../assets/img/work1tech.png";
import Youtube from "../../assets/img/youtube-movie.png";
import Kolega from "../../assets/img/Kolega.png";
import Banksaku from "../../assets/img/Banksaku.png";
import CriticalSituation from "../../assets/img/CriticalSituation.png";
import WorkImage3 from "../../assets/img/work3tech.png";
import WorkImage4 from "../../assets/img/work4tech.png";
import WorkImage5 from "../../assets/img/work5tech.png";
import Twitter from "../../assets/img/twitter-clone.png";
import Mov from "../../assets/img/Mov.png";
import styled from "styled-components";

class Project extends Component {
  render() {
    return (
      <ProjectContainer className="animate__animated animate__fadeIn">
        <TitleSection>
          <h1>Recent Project</h1>
          <hr />
        </TitleSection>
        <ItemContainer>
          <ProjectItem
            title="Mov App"
            year="WEB BASED"
            tech="HTML / CSS / JAVASCRIPT"
            info="Build a movie info app using Vanilla Javascript (no framework)"
            link="https://mov-app.vercel.app/"
            logo={Mov}
            tech="HTML / CSS / JAVASCRIPT"
          />
          <ProjectItem
            title="CLONE NETFLIX WEBSITE"
            year="WEB BASED"
            tech="HTML / JAVASCRIPT"
            info="Build netflix clone app using Reactjs, StyledComponents, and TMDB API"
            link="https://netflix-clone-nu.vercel.app/"
            logo={WorkImage5}
          />
          <ProjectItem
            title="Twitter App"
            year="WEB BASED"
            tech="HTML / CSS / JAVASCRIPT"
            info="Cloning twitter app using reactjs, tailwindcss, and API Github"
            link="https://twitterapp-clone.vercel.app/"
            logo={Twitter}
            tech="HTML / CSS / JAVASCRIPT"
          />
          <ProjectItem
            title="YOUTUBE MOVIE APP"
            year="WEB BASED"
            tech="HTML / JAVASCRIPT"
            info="Build a Website Youtube Movie using HTML, CSS, ReactJS, Axios, Movie API and Styled Components"
            link="https://youtube-movie-app.restuba.vercel.app/"
            logo={Youtube}
            tech1="javascript"
          />

          <ProjectItem
            title="LEGAPAKET"
            year="WEB BASED"
            tech="HTML / CSS / JAVASCRIPT"
            info="Build a client website with HTML, SASS and Javascript"
            link="https://legapaket.com/"
            logo={WorkImage4}
          />
          <ProjectItem
            title="KOLEGA COWORKING SPACE"
            year="WEB BASED"
            tech="HTML / CSS / PHP / MySQL"
            info="Build a client website with HTML, CSS, PHP, and MySQL"
            link="http://kolegainternship.epizy.com/"
            logo={Kolega}
          />
          <ProjectItem
            title="FUSION APP"
            year="WEB BASED"
            tech="HTML / CSS / JAVASCRIPT"
            info="Converting static website into ReactJS and styled-components"
            link="#"
            logo={WorkImage3}
          />
          <ProjectItem
            title="Critical Situation VR"
            year="MOBILE APP"
            tech="C# / Unity"
            info="Build a Simulation Game for OHS Training when an Earthquake happens based on VR"
            link="#"
            logo={CriticalSituation}
          />
          <ProjectItem
            title="BANKSAKU DESIGN"
            year="DESIGN"
            tech="Figma"
            info="Design of Banksaku App for college assignments"
            link="https://www.behance.net/gallery/80412961/Banksaku-App-Personal-finance"
            logo={Banksaku}
          />
          <ProjectItem
            title="LEGAPAKET DESIGN"
            year="DESIGN"
            tech="Adobe XD"
            info="Design of Transporation Service Produck for PT. Leuwigajah"
            link="https://www.behance.net/gallery/103260921/UI-Legapaket?"
            logo={LegaUI}
          />
          <ProjectItem
            title="Customy Design"
            year="DESIGN"
            tech="Photoshop"
            info="Build a client website with HTML, SASS and Javascript"
            link="#"
            logo={Costumy}
          />
        </ItemContainer>
      </ProjectContainer>
    )
  }
}

export default Project;

const ProjectContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 425px){
    padding: 0px;
  }
  @media (max-width: 720px){
    text-align: center;
    padding: 0;
  }
`;

const TitleSection = styled.div`
padding: 20px;
  h1{
    color: #b88746;
  }
`;

const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;