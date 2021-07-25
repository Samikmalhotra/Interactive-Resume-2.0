import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/profile.css'
const Profile = () => {
    return (
        <Fragment>
          <h2 className="section-heading">About Me</h2>
          <h3 className="section-quote">"No Pressure, No Diamonds"</h3>
          <hr/>
        <Row>
          <Col lg={7} md={7} xs={12} className='profile-text'> 
          Hi, I'm Samik Malhotra (aka Sam), a sophomore at Thapar Institute of Engineering and Technology. I am a developer from India, currently, I'm a member of ACM-Thapar and Creative-Computing-Society . Beside's programming, I enjoy skateboarding, football, travelling and reading novels
          </Col>
          <Col lg={5} md={5} className='profile-photo'></Col>
        </Row>
        
      </Fragment>
    )
}

export default Profile
