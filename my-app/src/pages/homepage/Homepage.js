import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import { MyCarousel } from '../../features/carousel/Carousel';  

export function Homepage() {
    return (
        <div>
            <MyCarousel />
            <br></br>
            HOME PAGE
            <br></br>
        </div>
    )
}