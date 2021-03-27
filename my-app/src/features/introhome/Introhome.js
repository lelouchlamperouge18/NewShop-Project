import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
import './Introhome.css';

import box1 from '../../assets/photos/introhome-box1.jpg'
import box2 from '../../assets/photos/introhome-box2.jpg'
import box3 from '../../assets/photos/introhome-box3.jpg'

export function Introhome() {
    return (
        <div className="Introhome">
            <Container>
                <Row>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className="Introhome__box">
                            <div className="Introhome__image">
                                <img className="img-fluid" src={box1} alt="box1"></img>
                            </div>
                            <div className="Introhome__title">
                                WE ON-TOP!
                            </div>
                            <div className="Introhome__descripton">
                                We are one of the largest and most prestigious stores in Quang Tri Province, Vietnam
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className="Introhome__box">
                            <div className="Introhome__image">
                                <img className="img-fluid" src={box2} alt="box2"></img>
                            </div>
                            <div className="Introhome__title">
                                WE LISTEN
                            </div>
                            <div className="Introhome__descripton">
                                We always look forward to receiving more feedback from customers so we can serve you better
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className="Introhome__box">
                            <div className="Introhome__image">
                                <img className="img-fluid" src={box3} alt="box3"></img>
                            </div>
                            <div className="Introhome__title">
                                WE UNDERSTAND
                            </div>
                            <div className="Introhome__descripton">
                                We always try to update the best products, the latest trends to bring satisfaction to all of you 
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="12" lg="3">
                        <div className="Introhome__next">
                            <Link to="/contact">
                                <p> CONTACT US ➜</p>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <div className="Introhome__bigtitle">
                            WANT TO KNOW MORE ABOUT US?
                        </div>
                        <div className="Introhome__smalltitle">
                        📢 Subcribe our Youtube channel to follow the latest videos 🌺
                        </div>
                        <div className="Introhome__youtube">
                        <Row>
                            <Col xs="12" sm="1" md="2" lg="2"></Col>
                            <Col xs="12" sm="10" md="8" lg="8">
                                <iframe 
                                    style={{'width':'100%', 'height':'350px'}}
                                    src="https://www.youtube.com/embed/kgM3uUEMbYk"
                                    title="Intro Youtube Channel"
                                >
                                </iframe>
                            </Col>
                            <Col xs="12" sm="1" md="2" lg="2"></Col>
                        </Row>
                        {/* <iframe 
                            width="660" height="400"
                            src="https://www.youtube.com/embed/kgM3uUEMbYk"
                            title="Intro Youtube Channel"
                        >
                        </iframe> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}