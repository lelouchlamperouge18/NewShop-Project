import React from 'react';
import './Cartpage.css'
import { useSelector } from 'react-redux';

import {
    forTest,
    listProductAvailable
} from '../../features/listproduct/listproductSlice';

export function Cartpage() {
    const listProduct = useSelector(listProductAvailable);
    const inCartProduct = listProduct.filter(item => item.inCart === true);
    const inCartQuantity = useSelector(forTest);
    return (
        <div className="Cartpage">
            <hr></hr>
            <p style={{'color': 'purple', 'font-size': 30}}>YOUR CART</p>
            <p>Có {inCartQuantity} sản phẩm trong giỏ hàng của bạn</p>
            <hr></hr>
            {inCartProduct.map((item, index) => (
                <p>{item.productName} với số lượng {item.numberInCart}</p>
            ))
            }
        </div>
    )
}