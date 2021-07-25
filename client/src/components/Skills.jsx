import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/skills.css'
const Skills = () => {
    return (
        <div className="skills">
          <h1><gold>Skills</gold></h1>
          <i>
            <h4 className="subs">"What really matters, is the depth of your heart <br />and the strength of your character"</h4>
          </i>
          <hr className="main-hr"/>
    
          <p>
            Technical Skills
          </p>
    
          <Row>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-html5-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-css3-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-javascript-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-bootstrap-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-react-original-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-nodejs-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-redux-original devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-express-original devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-mongodb-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-c-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-cplusplus-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-python-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-r-original devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-jquery-plain-wordmark devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-git-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-linux-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-sequelize-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-kubernetes-plain devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-amazonwebservices-original devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-nginx-original devicon "></i>
            </Col>
            <Col lg={2} md={2} sm={3}>
              <i className="devicon-docker-plain devicon "></i>
            </Col>
          </Row>
        </div>
    )
}

export default Skills
