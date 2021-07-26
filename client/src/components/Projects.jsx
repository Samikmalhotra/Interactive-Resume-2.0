import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/projects.css'
import {Button} from '@material-ui/core'

const Projects = () => {
    return (
        <Fragment>
            <h2 className="section-heading">Projects</h2>
            <h2 className="section-quote">"Time is the scarcest resource and unless it
is managed nothing else can be managed"</h2>
            <hr/>  
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

            <Button className='project-btn'>More Projects</Button>


        </Fragment>
    )
}

export default Projects
