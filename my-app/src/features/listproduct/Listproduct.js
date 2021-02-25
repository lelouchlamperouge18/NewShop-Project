import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styles from './Listproduct.module.css';
// import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap'
import {
    selectCount
} from '../../features/counter/counterSlice';
import {
    listProductAvailable
} from '../../features/listproduct/listproductSlice';
import {
    doNothing, 
    addToCart
} from './listproductSlice'
import defaultPath from '../../assets/photos/kagome.jpg';

export function Listproduct() {
    const count = useSelector(selectCount); 
    const dispatch = useDispatch();
    const listofProduct = useSelector(listProductAvailable);
    const quantityProduct = listofProduct.length;
    return (
        <div className="Listproduct">
            NEW COUNTER: {count} 
            <br></br>
            <hr></hr>
            <p style={{'color': 'purple', 'font-size': 30}}>LIST PRODUCTS</p>
            <p> Hiện có {quantityProduct} sản phẩm </p>
            <hr></hr>
            <Container>
                <Row>
                    {listofProduct.map((item, index) => (
                        <Col xs="6" sm="6" md="4" lg="3">
                        <div className="product">
                            <div className="product__image">
                                <img className="img-fluid" src={defaultPath} alt="photos"/> 
                            </div>
                            <div className="product__name">
                                ● {index+1} ●
                                <br></br>
                                {item.productName}
                            </div>
                            <div className="product__description">
                                {item.description}
                            </div>
                            <div className="product__price">
                                {item.price} $
                            </div>
                            <div className="product__currentPrice">
                                {(item.price*(100-item.discount)/100).toFixed(1)} $
                            </div>                       
                            <Row>
                                <Col xs="6" sm="6" md="6" lg="6">
                                    <div className="product__add-to-love">
                                        <Button outline color="danger">❤️️</Button>{' '}
                                    </div>
                                </Col>
                                <Col xs="6" sm="6" md="6" lg="6">
                                    <div className="product__add-to-cart" onClick={() => dispatch(addToCart(index))}>
                                        <Button outline color="info" >
                                            <svg width="1.25em" height="1.25em" viewBox="0 1 16 16" class="bi bi-shop" fill="purple" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                            </svg>
                                        </Button>{' '}
                                    </div>
                                </Col>                         
                            </Row> 
                        </div>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </div>
    )
}