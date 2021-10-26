import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Profile from '../components/Profile';
import Workex from '../components/Workex';
import Skills from '../components/Skills'
import Container from '../components/Container';
import Education from '../components/Education';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel.color-1 {
    background-color: #090021;
  }
  
  .panel.color-2 {
    background-color: #1A1A2E;
  }
  

`;

const SkillsLayout = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel color-1">
            <Container>
              <Profile/>
            </Container>
            </section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel color-2">
              <Workex/>
            </section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel color-1">
            
              <Container>
             
              <Skills/>
              
              </Container>
            </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel color-2">
              <Container>
                <Education/>
              </Container>
            </section>
          </Tween>
         
        </Timeline>
        
      </Scene>
    </Controller>
    
  </SectionWipes2Styled>
);

export default SkillsLayout;