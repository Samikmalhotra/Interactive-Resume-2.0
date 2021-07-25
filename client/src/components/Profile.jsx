import React from 'react'
import {Row, Col} from 'react-bootstrap'
const Profile = () => {
    return (
        <Row>
        <Col lg={4} className="text-left">
          <h4 className="about-me-details-heading">About Me</h4>
          <p className="about-me-details-text" >
            I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.
          </p>
        </Col>
        <Col lg={4} className="text-left" >
          <img src='' className="profile-photo" alt=''/>
        </Col>
        <Col lg={4} className="text-left" >
          <h4 className="about-me-details-heading">Details</h4>
          <p className="about-me-details-text">
          <b>Name:</b><br />
          Samik Malhotra<br />
          <b>Age:</b><br />
          18<br />
          <b>Location:</b><br />
          Delhi, India, Earth<br />
          </p>
        </Col>
      </Row>
    )
}

export default Profile
