import React from 'react'
import { Fragment } from 'react'
import { Form } from 'react-bootstrap'
import {Button} from '@material-ui/core'
import {Row, Col} from 'react-bootstrap'
import contact from '../img/Mail sent-amico.svg'
import '../css/footer.css'

const Footer = () => {
    return (
        <Fragment>
            <a name="footer"></a>
            <p className="side-text-contact">Contact</p>
            <h2 className="section-heading">Contact</h2>
            <h2 className="section-quote">"A simple hello could lead to a million things"</h2>
            <hr/>  
            <Row>
                <Col lg={4} md={4}>
                <img src={contact} alt="contact" className="contact-img"/>
                <p className="contact-text">© 2021 - Designed and built by Samik Malhotra</p>
                <p>Background image and illustrations are property of <bold><a href="https://www.freepik.com/" target="blank" rel="noreferrer">Freepik</a></bold> and <bold><a href="https://storyset.com/" target="blank" rel="noreferrer">Storyset</a></bold> respectively</p>
                </Col>
                <Col>
                <div className="contact-form">
                <Form name="Contact" method="POST" data-netlify="true">
                <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={5} type="text" placeholder="Enter message" />
  </Form.Group>
  <center>
  <Button type="submit">
    Submit
  </Button>
  </center>
</Form>
                </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Footer
