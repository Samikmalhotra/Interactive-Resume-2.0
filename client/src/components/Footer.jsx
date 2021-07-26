import React from 'react'
import { Fragment } from 'react'
import { Form } from 'react-bootstrap'
import {TextField} from '@material-ui/core'

const Footer = () => {
    return (
        <Fragment>
            <h2 className="section-heading">Contact</h2>
            <h2 className="section-quote">"A simple hello could lead to a million things"</h2>
            <hr/>  

                <TextField label="Name"></TextField>
                <TextField label="Email"></TextField>
                <TextField label="Message"></TextField>
        </Fragment>
    )
}

export default Footer
