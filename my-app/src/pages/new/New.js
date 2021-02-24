import React from 'react';
import './New.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { Container, Row, Col, Button } from 'reactstrap'
// // import {
//     selectCount
// } from '../../features/counter/counterSlice';
// import {
//     listProductAvailable
// } from '../../features/listproduct/listproductSlice';
import { Listproduct } from '../../features/listproduct/Listproduct';
// import defaultPath from '../../assets/photos/kagome.jpg';

export function New() {
    return (
        <div className="New">
            <Listproduct/> 
        </div>
    )
}