import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Singlepostpage.css'
import { Container, Row, Col, Button, ButtonGroup, Card, CardImg } from 'reactstrap'
import {
    listProductAvailable,
    addToCart
} from '../../features/listproduct/listproductSlice';
import image748 from '../../assets/photos/748.PNG'
import defaultPath from '../../assets/photos/kagome.jpg';

export const Singlepostpage = ({match}) => {
    const dispatch = useDispatch();
    const { productID } = match.params;
    console.log("TEST 1: " + productID);
    // const singleProduct = useSelector((state) =>
    //     state.listproduct.product.find((item) => item.productID === productID)
    // )
    const listofProduct = useSelector(listProductAvailable);
    const singleProduct = listofProduct.find((item)=>(item.productID == productID));

    if (!singleProduct) {
        return (
            <div className="Singlepostpage">
                <br></br>
                <h1> NOT FOUND!</h1>
            </div>            
        )
    } else 
    return (
        <div className="Singlepostpage">
            <br></br>
            <Container>
                <Row>
                    <Col xs="12" sm="8" md="9" lg="9">
                        <Row>
                            <Col xs="12" sm="4" md="4" lg="4">
                                <Card>
                                    <CardImg className="Singlepostpage__image" top width="100%" src={defaultPath} alt="Card image" />
                                </Card>
                            </Col>
                            <Col xs="0" sm="1" md="1" lg="1"></Col>
                            <Col xs="12" sm="7" md="7" lg="7">
                                <div className="Singlepostpage__productName">
                                    {singleProduct.productName}
                                </div>
                                <div className="Singlepostpage__description">
                                    {singleProduct.description}
                                </div>
                                <div className="Singlepostpage__status">
                                    Status: {singleProduct.status}
                                </div>
                                <div className="Singlepostpage__realprice">
                                    {singleProduct.price*(100-singleProduct.discount)/100} $
                                </div>
                                <div className="Singlepostpage__price">
                                    {singleProduct.price} $
                                </div>
                                <ButtonGroup className="Singlepostpage__buttongroup">
                                    <Button color="danger">Add to love ❤️</Button>
                                    <pre>  </pre>
                                    <Button color="info" onClick={() => dispatch(addToCart(singleProduct.productID-1))}>Add to cart +</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="4" md="3" lg="3">
                        <div className="Singlepostpage__748">
                            <p>CHÍNH SÁCH BÁN HÀNG</p>
                            <img className="img-fluid" src={image748} alt="photos"/> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}