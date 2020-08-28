import React from "react";
import { CardImg } from "reactstrap";
import Button from "../../button/Button";
import styled from "styled-components";

const ProjectItem = props => {
  return (
      <Item>
        <DescItem>
          <h6>
            {props.year}
            <hr style={{ width: "30%" }} />
          </h6>
          <h1 style={{color: '#b88746'}}>{props.title}</h1>
          <h6 style={{ color: "#616161" }}>Technology</h6>
          <h6 >{props.tech}</h6>
          <hr style={{ width: "10%" }} />
          <p>
            {props.info}
          </p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Button text="VIEW" />
          </a>
        </DescItem>
        <DescItem>
          <CardImg src={props.logo}/>
        </DescItem>
      </Item>
  );
};

export default ProjectItem;

const Item = styled.div`
  padding: 24px;
  background: #111;
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  p{
    line-height: 2.5;
  }
  div{
    flex: 1;
  }
  @media (max-width: 768px){
    flex-direction: column;
  }
  @media (max-width: 425px){
    h1{
      font-size: 20px;
    }
    h6{
      font-size: 12px;
    }
    p{
      font-size: 12px;
    }
  }
`;

const DescItem = styled.div`
  margin: auto 0;
  img{
    width: 100%;
  }
`;