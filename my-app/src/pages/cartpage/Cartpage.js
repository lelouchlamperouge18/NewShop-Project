import React from 'react';
import './Cartpage.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Container, Row, Col,
    Table,
    Button,
    Toast, ToastBody, ToastHeader,
    Form, FormGroup, Label, Input,
    Alert
} from 'reactstrap';

import {
    forTest,
    listProductAvailable,
    removeFromCart,
    increaseProduct,
    decreaseProduct,
    totalPrice
} from '../../features/listproduct/listproductSlice';

export function Cartpage() {
    const dispatch = useDispatch();
    const listProduct = useSelector(listProductAvailable);
    const inCartProduct = listProduct.filter(item => item.inCart === true);
    const inCartQuantity = useSelector(forTest);
    const totalFinalPrice = useSelector(totalPrice);
    return (
        <div className="Cartpage">
            <hr></hr>
            <p style={{'color': 'purple', 'font-size': 30}}>YOUR CART</p>
            {inCartQuantity === 0 ?
                <div>
                    <p>Nothing in your cart</p>                   
                </div>
                : 
                <div>
                    {
                        (inCartQuantity === 1) ?
                        <p>There is {inCartQuantity} product in your cart</p>
                        :
                        <p>There are {inCartQuantity} products in your cart</p>
                    }
                </div>
            }
            <Link to="/new">
                <Button >↻ BACK TO MAIN SHOP </Button>
            </Link>  
            <br></br>
            <Container>
                <Row>
                    {inCartQuantity > 0 ? 
                        <Col xs="12" sm="12" md="12" lg="12">
                        <Table dark style={{'margin-top':10}}>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name of product</th>
                                <th>Quantities</th>
                                <th>Price (included discount)</th> 
                                <th>Final Price(¥)</th>
                                <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inCartProduct.map((item, index) => (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{item.productName}</td>
                                        <td> 
                                            <Button className="Cartpage__button" color="secondary" onClick={() => dispatch(decreaseProduct(item.productID))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                            </svg>   
                                            </Button>
                                                {item.numberInCart}
                                            <Button className="Cartpage__button" color="secondary" onClick={() => dispatch(increaseProduct(item.productID))}>
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
                        : 
                        <div></div>
                    }
                    {inCartQuantity > 0 ? 
                        <Col xs="12" sm="12" md="12" lg="12">
                            <p style={{'font-size':30}}>TOTAL: {totalFinalPrice} ¥</p>
                        </Col>
                        :
                        <div></div>
                    }   
                </Row>
            </Container>
            <hr></hr>
            <p style={{'color': 'purple', 'font-size': 30}}>CHECKOUT</p>
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" className="Cartpage__checkout">
                        <div className="lienhe__title1">
                            Contact information
                        </div>
                        <Form>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Customer's Name: (*)</Label>
                                <Col sm={10}>
                                <Input required type="text" name="name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Email: </Label>
                                <Col sm={10}>
                                <Input type="email" name="email"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Phone Number: (*)</Label>
                                <Col sm={10}>
                                <Input required type="number" name="telephone"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Delivery Address : (*)</Label>
                                <Col sm={10}>
                                <Input required type="text" name="name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Note: </Label>
                                <Col sm={10}>
                                <Input type="textarea" name="noidung" rows="5"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2}></Label>
                                <Col sm={10}>
                                    {totalFinalPrice > 0 ?
                                        // <Link to="/cartpage">
                                            <Button color="danger" className="lienhe__submit">GỬI</Button>
                                        // </Link>
                                        :
                                        // <p style={{'color':'red'}}>You need to have at least one item in your cart for payment.</p>
                                        <Alert color="danger">
                                            You need to have at least one item in your cart for payment.
                                        </Alert>
                                    }
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-success my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                PRODUCT WARRANTY 
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>⌚ 90 DAYS</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-info my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                FREE CHANGES 
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>⌛ 48 HOURS</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <div className="p-3 bg-danger my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                HOTLINE
                            </ToastHeader>
                            <ToastBody>
                                <strong style={{'font-size': 20}}>✆ 0123456789</strong>
                            </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}