import React, { Component } from "react";
import styled from 'styled-components';

class Skills extends Component {
  render() {
    return (
      <SkillsContainer className="animate__animated animate__fadeIn">
        <TitleSection>
          <h1>Capability</h1>
          <hr />
        </TitleSection>
        <DescSection>
          <p>
            I am well-versed in HTML, CSS and JS. I primarily build
            small to medium web apps with React or Native, designing
            interactive layouts and working with different API's.
          </p>
          <p>
            Here is a selection of relevant technologies that I am
            experienced in using:
          </p>
        </DescSection>       

        <TableSection>
            <table>
              <thead>
                <tr>
                  <th>
                    LANGUAGES <hr />
                  </th>
                  <th>
                    METHOD & TOOLS <hr />
                  </th>
                  <th>
                    FRAMEWORKS & LIBS <hr />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML5</td>
                  <td>SASS</td>
                  <td>Styled Components</td>
                </tr>
                <tr>
                  <td>CSS(SCSS)</td>
                  <td>Version Control System</td>
                  <td>Bootstrap, Reactstrap</td>
                </tr>
                <tr>
                  <td>JavaScript (ES6)</td>
                  <td>Figma</td>
                  <td>React, jQuery</td>
                </tr>
              </tbody>
            </table>
        </TableSection>
      </SkillsContainer>
    )
  }
}

export default Skills;

const SkillsContainer = styled.div`
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

const DescSection = styled.div`
  padding: 20px;
`;

const TableSection = styled.div`
  padding: 20px;
  hr{
    width: 40px;
    background: #b88746;
  }
  table{
    width: 100%;
    border: none;
    th, td {
      text-align: left;
      padding: 8px;
    }  
    @media (max-width: 375px){
      th{
        display: none;
      }
    } 
  }
`;