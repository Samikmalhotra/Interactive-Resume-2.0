import React,{Fragment} from 'react'
import {Row,Col} from 'react-bootstrap'
import achievement from '../img/Achievement-bro.svg'
import '../css/achievement.css'
const Achievements = () => {
    return (
        <Fragment>
            <a name = "achievements"></a>
            <h2 className="section-heading">Achievements</h2>
            <h2 className="section-quote">"I was raised to treat the janitor with
the same respect as that of a CEO"</h2>
            <hr/>  
            <Row>
                <Col lg={8} md={8}>

                </Col>
                <Col>
                <img src={achievement} alt="achievement" className="achievement-img"/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Achievements
