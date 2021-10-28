import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/projects.css'
import {Button} from '@material-ui/core'
import project from '../img/Portfolio Update-bro.svg'
import Slider from "react-slick";
import useWindowDimensions from '../utils/useWindowDimensions'

const Projects = () => {
    const settings1 = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 300,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const settings2 = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    const {height,width} = useWindowDimensions();
    const settings = width > 772 ? settings1 : settings2;
    return (
        <Fragment>
            <p className="side-text-projects">Projects</p>
            <a name="education"></a>
            <a name="projects"></a>
            <h2 className="section-heading">Projects</h2>
            <h2 className="section-quote">"Time is the scarcest resource and unless it
is managed nothing else can be managed"</h2>
            <hr/> 
            <Row>
                <Col lg={4} md={4} className='projects-col'>
                    <img src={project} alt="project-img"/>
                </Col>
                <Col lg={8} md={8} xs={12}>
                
                <Slider {...settings}>
                {/* <Col xs={12} sm={6} md={6} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>Social Media Website</h4>
                    <p>Project description</p>
                    </div>
                </Col> */}
                <Col xs={12} sm={6} md={6} lg= {4} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>Microservices</h4>
                    <p><span>Nextjs</span><span> Nodejs</span><span> Express</span><span> MongoDB</span><span> Redis</span><span> NATS Streaming Server</span><span> Docker</span><span> Kubernetes</span><span> Nginx</span><span> Typescript</span></p>
                    <hr/>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg= {4} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>NPM library</h4>
                    <p><span>NATS Streaming Server</span><span> Nodejs </span><span>Typescript</span></p>
                    <hr/>
                    <h6></h6>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg= {4} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>Social Media Website</h4>
                    <p><span>Reactjs</span><span>MongoDB</span><span> Express</span><span> Redux</span><span> Nodejs</span></p>
                    <hr/>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg= {4} className="project-col">
                    <div className='project-item'>
                    <i></i>
                    <h4>Ecommerce Website</h4>
                    <p><span>Reactjs</span><span> MongoDB</span><span> Express</span><span> Redux</span><span> Nodejs</span></p>
                    <hr/>
                    </div>
                </Col>
                </Slider>
               
                {/* <Col xs={12} sm={6} md={6} className="project-col">
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
                </Col> */}
            

            <a href="https://github.com/Samikmalhotra?tab=repositories" target="_blank">
                <Button className='project-btn'>More Projects</Button>
            </a>
                </Col>
            </Row> 
            


        </Fragment>
    )
}

export default Projects
