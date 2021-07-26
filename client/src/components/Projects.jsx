import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/projects.css'
import {Button} from '@material-ui/core'
import project from '../img/Portfolio Update-bro.svg'
const Projects = () => {
    return (
        <Fragment>
            <h2 className="section-heading">Projects</h2>
            <h2 className="section-quote">"Time is the scarcest resource and unless it
is managed nothing else can be managed"</h2>
            <hr/> 
            <Row>
                <Col lg={4} md={4} xs={12}>
                    <img src={project} alt="project-img"/>
                </Col>
                <Col>
                <Row>
                <Col xs={12} sm={6} md={6} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>Social Media Website</h4>
                    <p>Project description</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="project-col">
                <div className='project-item'>
                    <i></i>
                    <h4>E-commmerce Website</h4>
                    <p>Project description</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="project-col">
                <div className='project-item'>
                    <i></i>
                    <h4>Multi-Container Docker App</h4>
                    <p>Project description</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="project-col">
                <div className='project-item'>
                    <i></i>
                    <h4>Discord Bot</h4>
                    <p>Project description</p>
                    </div>
                </Col>
            </Row>

            <a href="https://github.com/Samikmalhotra?tab=repositories">
                <Button className='project-btn'>More Projects</Button>
            </a>
                </Col>
            </Row> 
            


        </Fragment>
    )
}

export default Projects
