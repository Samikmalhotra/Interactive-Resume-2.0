import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap';
const ProjectsLayoutStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  .panel.color-1 {
    background-color: #090021;
  }
  .panel.color-2 {
    background-color: #1A1A2E;
  }

`;

const ProjectsLayout = () => (
  <ProjectsLayoutStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel color-1">
          <Container>
            <Projects/>
          </Container>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel color-2">
        <Container>
          <Achievements/>
        </Container>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel color-1">
        <Container>
         <Footer/>
        </Container>
        </div>
      </Scene>
    </Controller>
  </ProjectsLayoutStyled>
);

export default ProjectsLayout;
