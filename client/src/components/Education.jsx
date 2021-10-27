import React from 'react'
import { Fragment } from 'react'
import{Row,Col} from 'react-bootstrap'
import '../css/education.css'
import learning from '../img/Learning-bro.svg'

const Education = () => {
    return (
        <Fragment>
        <p className="side-text-education">Education</p>
        <img src={learning} className='learning' alt='learning'/>
        <a name="skills"></a>
        <div className='education'>
            <h2 className="section-heading">Education</h2>
            <a name="education"></a>
            <h2 className="section-quote">"I don't like studying, I like learning. Learning is beautiful."</h2>
            <hr/>
            <Row>
        <Col xs={4} className="education-institute">
          <p className="institute-name">Thapar Institute of Engineering and Technology</p>
          <p className="time-spent">2020-2024</p>
        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Bachelor of Engineering (B.E.) - Computer Science and Business Systems </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
         Patiala, Punjab, India</p>
        </Col>
      </Row>
      <Row class="row" >
        <Col xs={4} className="education-institute">
          <p className="institute-name">Shah International School</p>
          <p className="time-spent">2016-2020</p>
        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">High School </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
         Delhi, India</p>
        </Col>
      </Row>
      <Row  >
        <Col xs={4} className="education-institute">
          <p className="institute-name">Global Indian International School</p>
          <p className="time-spent">2013-2016</p>

        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Middle School </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
          Bangkok, Thailand</p>
        </Col>
      </Row>
      <Row >
        <Col xs={4} className="education-institute">
          <p className="institute-name">Shah International School</p>
          <p className="time-spent">2006-2013</p>

        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Elementary School </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
          Delhi, India</p>
          

        </Col>
      </Row>
      
        </div>
       
        </Fragment>
    )
}

export default Education
