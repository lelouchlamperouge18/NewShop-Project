import React from 'react';
import './Cartpage.css'
import { useSelector, useDispatch } from 'react-redux';

import {
    Container, Row, Col,
    Table,
    Button,
    Toast, ToastBody, ToastHeader 
} from 'reactstrap';

import {
    forTest,
    listProductAvailable,
    removeFromCart,
    increaseProduct,
    decreaseProduct
} from '../../features/listproduct/listproductSlice';

export function Cartpage() {
    const dispatch = useDispatch();
    const listProduct = useSelector(listProductAvailable);
    const inCartProduct = listProduct.filter(item => item.inCart === true);
    const inCartQuantity = useSelector(forTest);
    return (
        <div className="Cartpage">
            <hr></hr>
            <p style={{'color': 'purple', 'font-size': 30}}>YOUR CART</p>
            <p>Có {inCartQuantity} sản phẩm trong giỏ hàng của bạn</p>
            <hr></hr>
            <Container>
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-success my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                BẢO HÀNH SẢN PHẨM 
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>⌚ 90 NGÀY</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-info my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                ĐỔI HÀNG MIỄN PHÍ 
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>⌛ 20 NGÀY</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-danger my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                HOTLINE TƯ VẤN 
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>✆ 0123456789</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12">
                    <Table dark>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name of product</th>
                            <th>Quantities</th>
                            <th>Price (included discount)</th> 
                            <th>Final Price</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inCartProduct.map((item, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.productName}</td>
                                    <td> 
                                        <Button color="secondary" onClick={() => dispatch(decreaseProduct(item.productID))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>   
                                        </Button>
                                            {item.numberInCart}
                                        <Button color="secondary" onClick={() => dispatch(increaseProduct(item.productID))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                        </svg>          
                                        </Button>
                                    </td>
                                    <td>{(item.price*(100-item.discount)/100).toFixed(1)}</td>
                                    <td>{((item.numberInCart)*(item.price*(100-item.discount)/100)).toFixed(1)}</td>
                                    <td>
                                        <Button color="danger" onClick={() => dispatch(removeFromCart(item.productID))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}