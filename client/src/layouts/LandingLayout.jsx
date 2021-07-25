import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const Sticky2Styled = styled.div`
  overflow: hidden;
  
  #color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
 }
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
    left:17%;
    overflow: visible;
    color: white;
    font-size: 4rem;  
  }
`;

const LandingLayout = () => (
  <Sticky2Styled>
    <Controller>
      <div>
        <Scene
          triggerHook="onLeave"
          duration={1000}
          pin
        >
          {(progress) => (
            <div className="sticky landing">
               <div id='color-overlay'/>
              <Timeline totalProgress={progress} paused>
                <Timeline
                  target={
                    <div className="name-title">
                      <h2>Samik Malhotra</h2>
                    </div>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  />
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
                    <div className="tagline">
                      <h2>I am a MERN Stack Developer</h2>
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
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  </Sticky2Styled>
);

export default LandingLayout;