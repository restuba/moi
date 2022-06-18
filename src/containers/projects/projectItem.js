import React from 'react';
import { CardImg } from 'reactstrap';
import { Button } from '../../components';
import { DescItem, Item } from './style';

const ProjectItem = (props) => {
  const { year, title, tech, info, link, logo } = props;
  return (
    <Item>
      <DescItem>
        <h6>
          {year}
          <hr style={{ width: '30%' }} />
        </h6>
        <h1 style={{ color: '#b88746' }}>{title}</h1>
        <h6 style={{ color: '#616161' }}>Technology</h6>
        <h6>{tech}</h6>
        <hr style={{ width: '10%' }} />
        <p>{info}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>VIEW</Button>
        </a>
      </DescItem>
      <DescItem>
        <CardImg src={logo} />
      </DescItem>
    </Item>
  );
};

export default ProjectItem;
