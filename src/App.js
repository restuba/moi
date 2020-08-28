import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Loading from './components/loading/Loading';

class App extends React.Component {
  state = {
    content: <Loading/>
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        content: (
        <Router>
          <Container>
            <Main>
              <Navbar />
              <Switch>
                <Route  path="/" exact component={ Home }/>
                <Route  path="/about" exact component={ About }/>
                <Route  path="/skills" exact component={ Skills }/>
                <Route  path="/project" exact component={ Project }/>
                <Route  path="/contact" exact component={ Contact }/>
              </Switch>
            </Main>
          </Container>
        </Router>
        )
      })
    }, 3000)
  }
  render(){
    return this.state.content;  
  }  
};

export default App;

const Container = styled.div`
  display: grid;
  height: 100%;
  background: rgb(6, 6, 6);
  overflow-x: hidden;
  hr{
    background: #b88746;
    width: 7.25%;
    @media (max-width: 720px){
      margin: 1rem auto;
    }
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  background: rgb(6, 6, 6);
  @media (max-width: 1024px){
    grid-template-columns: 10% 90%;
  }
  @media (max-width: 625px){
    grid-template-columns: 15% 85%;
  }
`;