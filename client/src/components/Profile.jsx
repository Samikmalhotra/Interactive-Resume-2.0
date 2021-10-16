import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/profile.css'
import blob from '../img/blob.svg'
import {Button} from '@material-ui/core'

const Profile = () => {
    return (
        <Fragment>
          <a name="profile"></a>
          <h2 className="section-heading">About Me</h2>
          <h3 className="section-quote">"No Pressure, No Diamonds"</h3>
          <hr/>
        <Row>
          <Col lg={7} md={7} xs={12} className='profile-text'> 
          <p>Hi, I'm Samik Malhotra (aka Sam), a sophomore at Thapar Institute of Engineering and Technology. I am a developer from India, currently, I'm a member of ACM-Thapar and Creative-Computing-Society . Beside's programming, I enjoy skateboarding, football, travelling and reading novels.</p>
          
          <ul>
            <li>I’m currently working on MERN stack projects</li>
            <li>I’m currently learning Financial Markets, Fintech, Data Structures and Algorithms and DevOps</li>
            <li>I’m looking to collaborate on MERN stack projects</li>
            <li>I’m looking for help with DSA and competitive programming</li>
            <li>Ask me about web development, I am happy to help</li>
            <li>Fun Fact: There is something exciting coming in a month, stay tuned</li>
          </ul>
          </Col>
          <Col lg={5} md={5} className='profile-photo'>
            {/* <img src={blob} alt='' className='blob'/> */}
            <img src="https://avatars.githubusercontent.com/u/72279316?v=4" alt="Samik Malhotra" className="profile-img" />
            <br/><br/>
            <center><a href="https://github.com/Samikmalhotra?tab=repositories">
                <Button className='project-btn'>Resume</Button>
            </a></center>
          </Col>
        </Row>
        
      </Fragment>
    )
}

export default Profile
