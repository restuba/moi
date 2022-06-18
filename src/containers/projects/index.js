import React from 'react';
import ProjectItem from './projectItem';
import { projectList } from '../../configs/projects';
import { ItemContainer, ProjectContainer, TitleSection } from './style';

const Index = () => {
  return (
    <ProjectContainer className="animate__animated animate__fadeIn">
      <TitleSection>
        <h1>Recent Project</h1>
        <hr />
      </TitleSection>
      <ItemContainer>
        {projectList.map((item) => {
          return (
            <ProjectItem
              key={item?.title}
              title={item?.title}
              year={item?.year}
              tech={item?.tech}
              info={item?.info}
              link={item?.link}
              logo={item?.logo}
            />
          );
        })}
      </ItemContainer>
    </ProjectContainer>
  );
};

export default Index;
