import React,{Fragment} from 'react'
import '../css/workex.css'
import {Row,Col} from 'react-bootstrap'
import project from '../img/Project Stages-bro.svg'

const Workex = () => {
    return (
        <Fragment>
            <p className="side-text-workex">Experience</p>
            <h2 className="section-heading">Experience & Positions of Responsibility</h2>
            <h2 className="section-quote">"Every experience makes you grow"</h2>
            <hr className="hr-workex"/>

            <Row>
              <Col lg={8} md={12} sm={12} xs={12}>
              <section class="timeline">
              <div class="container">
    <div class="timeline-item">
      <div class="timeline-img"></div>

      <div class="timeline-content">
        <h2>Intern</h2>
        <div class="date">April-August, 2021</div>
        <p>Internship as a frontend developer at Cruxeware Technologies</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-img"></div>
      <div class="timeline-content">
        <h2>Joint Tech Head</h2>
        <div class="date">2021</div>
        <p>Joint Tech Head at ACM Thapar, a chapter of the international society of ACM at Thapar Institute of Engineering & Technology</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-img"></div>
      <div class="timeline-content">
        <h2>Core Member</h2>
        <div class="date">2021</div>
        <p>Core member at Creative Computing Society in Thapar Institute of Engineering & Technology</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-img"></div>
      <div class="timeline-content">
        <h2>Manager of Technical Affairs</h2>
        <div class="date">2021</div>
        <p>Manager of Technical Affairs at Thapar Toastmasters, a chapter of the international society of Toastmasters at Thapar Institute of Engineering & Technology</p>
      </div>
    </div>

    </div>
    </section>
              </Col>
              <Col>
              <img src={project} className='project-img' alt="project-img"/>
              </Col>
            </Row>
 
        </Fragment>
    )
}

export default Workex
