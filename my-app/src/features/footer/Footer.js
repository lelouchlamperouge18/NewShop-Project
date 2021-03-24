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
                                <div className="footer__title">LIÊN HỆ VỚI CHÚNG TÔI</div>
                                <div className="footer__info">
                                    Địa chỉ: Shirakawa-go, Japan
                                    <br></br>
                                    Email: info@otakushop - Điện thoại: 0123456789
                                    <br></br>
                                </div>
                                <div className="footer__title">SUBCRIBE in OUR NEWS LETTER</div>
                                <Button color="secondary">SUBCRIBE</Button>
                            </Col>
    
                            <Col xs="12" sm="7" md="7">
                                <Row>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">GIỚI THIỆU</div>
                                        <ul className="footer__list">
                                            <li>Thông tin công ty</li>
                                            <li>Lịch sử hình thành</li>
                                            <li>Tầm nhìn & Phát triển</li>
                                            <li>Quy định & điều khoản</li>
                                            <li>Trang cá nhân</li>
                                        </ul>
                                    </Col>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">SẢN PHẨM</div>
                                        <ul className="footer__list">
                                            <li>Sản phẩm mới nhất</li>
                                            <li>Sản phẩm tiêu biểu</li>
                                            <li>Sản phẩm HOT</li>
                                            <li>Sản phẩm bán chạy</li>
                                        </ul>
                                    </Col>
                                    <Col xs="4" sm="4" md="4">
                                        <div className="footer__title">TIN TỨC</div>
                                        <ul className="footer__list">
                                            <li>Tin tức tổng hợp</li>
                                            <li>Tin công ty</li>
                                            <li>Tin thị trường</li>
                                            <li>Tin khác</li>
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