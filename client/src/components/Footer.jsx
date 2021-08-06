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
            <h2 className="section-heading">Contact</h2>
            <h2 className="section-quote">"A simple hello could lead to a million things"</h2>
            <hr/>  
            <Row>
                <Col lg={4} md={4}>
                <img src={contact} alt="contact" className="contact-img"/>

                </Col>
                <Col>
                <div className="contact-form">
                <Form action="mailto:smalhotra2_be20@thapar.edu" method="get" enctype="text/plain">
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
    <Form.Control type="text" placeholder="Enter message" />
  </Form.Group>
  <Button type="submit">
    Submit
  </Button>
</Form>
                </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Footer
