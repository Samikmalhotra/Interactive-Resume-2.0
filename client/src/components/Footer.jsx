import React from 'react'
import { Fragment } from 'react'
import { Form } from 'react-bootstrap'
import {TextField} from '@material-ui/core'
import {Row, Col} from 'react-bootstrap'
import contact from '../img/Mail sent-amico.svg'

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

                <TextField label="Name"></TextField>
                <TextField label="Email"></TextField>
                <TextField label="Message"></TextField>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Footer
