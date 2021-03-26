import React from 'react';

import { MyCarousel } from '../../features/carousel/Carousel';  
import { Introhome } from '../../features/introhome/Introhome';
import { Photohome } from '../../features/photohome/Photohome';

export function Homepage() {
    return (
        <div className="Homepage">
            <MyCarousel />
            <br></br>
            <Introhome />
            <br></br>
            <Photohome />
        </div>
    )
}