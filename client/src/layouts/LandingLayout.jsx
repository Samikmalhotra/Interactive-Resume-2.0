import React,{Fragment} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
import { Container } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Button } from '@material-ui/core';

const Sticky2Styled = styled.div`
  overflow: hidden;
  
  .sticky, .sticky2 {
    height: 100vh;
    width: 100%;
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }
  }
  .name-title {
    position: absolute;
    bottom: 8%;
    left:19%;
    overflow: visible;
    color: white;
    text-transform: uppercase;
  }

`;

const LandingLayout = () => (
  <Sticky2Styled>
    <Controller>
      <div>
        <Scene
          triggerHook="onLeave"
          duration={2000}
          pin
        >
          {(progress) => (
            <div className="sticky landing">
              <Timeline totalProgress={progress} paused>
                <Timeline 
                  target={
                    <div className='gif'>
                      <p>Scroll Down</p>
                      <i class="fas fa-chevron-down"></i>
                      </div>
                  }>
                     <Tween
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                  />
                <Timeline
                  target={
                    <div className="name-title">
                      <h2>Samik Malhotra</h2>
                    </div>
                  }
                >
                  <Tween
                    to={{ y: '-200%' }}
                  />
                  <Tween
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                  />
                  <Timeline
                  target={
                    <div className='intro'>
                      <Container>
        <p className="hello-world">Hello World! My name is</p>
        <h2 className='intro-name'>Samik Malhotra</h2>
        <h2 className='intro-tagline'><ReactTypingEffect speed={40} eraseSpeed={40} typingDelay={400} eraseDelay={2000} text={["I love learning new things!", "I am a MERN Stack Developer"]}></ReactTypingEffect></h2>
        <p className='profile-social-icon-row'>
        <i class="fab fa-github-square profile-social-icon"></i>
        <i class="fab fa-linkedin profile-social-icon"></i>
        <i class="fab fa-twitter-square profile-social-icon"></i>

        </p>
        <a href="https://drive.google.com/file/d/1lEj87l-_Mjjs87wtpFoduZreTCxgZmBK/view?usp=sharing" target="_blank">
                <Button className='project-btn profile-btn'>Resume</Button>
            </a>
            <a href="#footer">
                <Button className='project-btn profile-btn'>Contact</Button>
            </a>
        </Container>
      </div>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  />

                </Timeline>
                </Timeline>
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  </Sticky2Styled>
);

export default LandingLayout;