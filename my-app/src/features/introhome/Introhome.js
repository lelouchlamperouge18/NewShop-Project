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
                                <img className="img-fluid" src={box1}></img>
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
                                <img className="img-fluid" src={box2}></img>
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
                                <img className="img-fluid" src={box3}></img>
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
                        <iframe 
                            width="660" height="400"
                            src="https://www.youtube.com/embed/kgM3uUEMbYk">
                        </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}