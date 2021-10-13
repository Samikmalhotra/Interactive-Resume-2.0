import React,{Fragment} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
import { Container } from 'react-bootstrap';
import scroll from '../img/scroll.gif'

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
                    to={{ y: '-200%'
                     }}
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
        <h2 className='intro-tagline'>I love learning new things!</h2>
        <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
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