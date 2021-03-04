import React from 'react'
import { useSelector } from 'react-redux'
import './Singlepostpage.css'
import {
    listProductAvailable
} from '../../features/listproduct/listproductSlice';

export const Singlepostpage = ({match}) => {
    const { productID } = match.params;
    console.log("TEST 1: " + productID);

    // const singleProduct = useSelector((state) =>
    //     state.listproduct.product.find((item) => item.productID === productID)
    // )
    const listofProduct = useSelector(listProductAvailable);
    // console.log("TEST 2: " + listofProduct);
    const singleProduct = listofProduct.find((item)=>(item.productID == productID));
    // console.log("TEST 3: " + singleProduct);

    if (!singleProduct) {
        return (
            <h1> NOT FOUND!</h1>
        )
    } else 
    return (
        <div>
            <h1> SUCCESS </h1> 
            <h1> {singleProduct.productID} </h1>
            <h2> {singleProduct.productName} </h2>
        </div>
    )

    // return (
    //     <div className="Singlepostpage">
    //         <h1> {singleProduct.productID} </h1>
    //         <h1> {singleProduct.productID} </h1>
    //     </div>
    // )
}