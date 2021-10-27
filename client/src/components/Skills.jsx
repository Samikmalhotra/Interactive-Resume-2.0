import React, { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/skills.css'
import dev from '../img/Programming-bro.svg'
const Skills = () => {
    return (
      <Fragment>
        <div className="skills">
        <p className="side-text-skills">Skills</p>
          <h2 className="section-heading">Technical Skills</h2>
            <h2 className="section-quote">"What really matters, is the depth of your heart and the strength of your character"</h2>
            <hr/>

        <Row className='full-page'>
          <Col lg={5} md={5} sm={1} xs={1} className="skill-img-col">
          <img src={dev} className="dev-image" alt='dev-img'/>
          </Col>
          <Col lg={7} md={7} xs={11}>
              <Row>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-html5-plain-wordmark devicon "></i>
              <p className="tech-label">HTML</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-css3-plain-wordmark devicon "></i>
              <p className="tech-label">CSS</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-javascript-plain devicon "></i>
              <p className="tech-label">JavaScript</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-bootstrap-plain-wordmark devicon "></i>
              <p className="tech-label">Bootstrap</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-react-original-wordmark devicon "></i>
              <p className="tech-label">React</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3} xs={3}>
              <i className="devicon-nodejs-plain devicon "></i>
              <p className="tech-label">Node.js</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-redux-original devicon "></i>
              <p className="tech-label">Redux</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-express-original devicon "></i>
              <p className="tech-label">Express</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-mongodb-plain-wordmark devicon "></i>
              <p className="tech-label">MongoDB</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-c-plain devicon "></i>
              <p className="tech-label">C</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-cplusplus-plain devicon "></i>
              <p className="tech-label">C++</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-python-plain-wordmark devicon "></i>
              <p className="tech-label">Python</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-r-original devicon "></i>
              <p className="tech-label">R</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-jquery-plain-wordmark devicon "></i>
              <p className="tech-label">jQuery</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-git-plain devicon "></i>
              <p className="tech-label">Git</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-linux-plain devicon "></i>
              <p className="tech-label">Linux</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-sequelize-plain devicon "></i>
              <p className="tech-label">Sequelize</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-kubernetes-plain devicon "></i>
              <p className="tech-label">Kubernetes</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-amazonwebservices-original devicon "></i>
              <p className="tech-label">Amazon Web Services</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-nginx-original devicon "></i>
              <p className="tech-label">Nginx</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-docker-plain devicon "></i>
              <p className="tech-label">Docker</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-typescript-plain devicon "></i>
              <p className="tech-label">Typescript</p>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <i className="devicon-jest-plain devicon "></i>
              <p className="tech-label">Jest</p>
            </Col>
          </Row>
          </Col>
          
          <a name="workex"></a>
        </Row>
          
        </div>
        
        </Fragment>
    )
}

export default Skills
