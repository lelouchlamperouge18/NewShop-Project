import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import './Footer.css';
  
export function Footer() {
    return (
        <div className="Footer">
            <Container fluid>
                <Row>
                    <Container>
                        <Row>
                            <Col xs="12" sm="5" md="5">
                                <div className="footer__title">CONTACT WITH US</div>
                                <div className="footer__info">
                                    Address: Shirakawa-go, Japan
                                    <br></br>
                                    Email: info@otakushop - Phone: 0123456789
                                    <br></br>
                                    Copyright © 2021 Cong Son Hoang (L.L) - HCMUS
                                    <br></br>
                                </div>
                                <div className="footer__title">SUBCRIBE in OUR NEWS LETTER</div>
                                <Button color="secondary">SUBCRIBE</Button>
                            </Col>
    
                            <Col xs="12" sm="7" md="7">
                                <Row>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">INTRODUCTION</div>
                                        <ul className="footer__list">
                                            <li>Company Information</li>
                                            <li>Hitsory Of Company</li>
                                            <li>Vision & Development </li>
                                            <li>Terms & Conditions</li>
                                            <li>Profile</li>
                                        </ul>
                                    </Col>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">PRODUCTS</div>
                                        <ul className="footer__list">
                                            <li>Newest Products</li>
                                            <li>Typical Products</li>
                                            <li>Hot Products</li>
                                            <li>Very Hot Products</li>
                                        </ul>
                                    </Col>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">TIN TỨC</div>
                                        <ul className="footer__list">
                                            <li>General News </li>
                                            <li>TCompany News</li>
                                            <li>Market News</li>
                                            <li>Others News</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div> 
    );
}