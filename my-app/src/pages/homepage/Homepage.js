import React from 'react';

import { MyCarousel } from '../../features/carousel/Carousel';  
import { Introhome } from '../../features/introhome/Introhome';

export function Homepage() {
    return (
        <div className="Homepage">
            <MyCarousel />
            <br></br>
            <Introhome />
        </div>
    )
}