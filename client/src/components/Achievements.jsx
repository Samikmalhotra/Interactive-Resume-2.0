import React,{Fragment} from 'react'
import {Row,Col} from 'react-bootstrap'
import achievement from '../img/Achievement-bro.svg'
import '../css/achievement.css'
const Achievements = () => {
    return (
        <Fragment>
                        <p className="side-text-achievements">Triumphs</p>

            <a name = "achievements"></a>
            <h2 className="section-heading">Achievements</h2>
            <h2 className="section-quote">"I was raised to treat the janitor with
the same respect as that of a CEO"</h2>
            <hr/>  
            <Row>
                <Col lg={8} md={8}>
                    <Row className="achievement-row"> 
                        <Col lg={4} xs={4}>
                            <div className="achievement-div">
                                <center><i class="fas fa-trophy fa-7x"></i></center>
                                <h3>Winner</h3>
                                <h5>Microsoft Learning Student Chapter Hackathon</h5>
                            </div>
                        </Col>
                        <Col lg={4} xs={4}>
                        <div className="achievement-div">
                        <center><i class="fas fa-award fa-7x"></i></center>
                            <h3>Top 10</h3>
                            <h5>Bennett University Hackathon</h5>
                        </div>
                        </Col>
                        <Col lg={4} xs={4}>
                        <div className="achievement-div">
                        <center><i class="fas fa-award fa-7x"></i></center>
                            <h3>Top 10</h3>
                            <h5>Hackowasp</h5>
                        </div>
                        </Col>

                    </Row>
                </Col>
                <Col className='achievement-col'>
                <img src={achievement} alt="achievement" className="achievement-img"/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Achievements
