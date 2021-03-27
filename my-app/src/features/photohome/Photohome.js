import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
import './Photohome.css';

import ImgsViewer from 'react-images-viewer'; //khựa, ko dùng đc function component
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer"; //bị che bởi header, đã fixed hehe
import Lightbox from 'react-lightbox-component'; //lỗi j éo hiểu

import gallery1 from '../../assets/photos/gallery1.jpg'
import gallery2 from '../../assets/photos/gallery2.jpg'
import gallery3 from '../../assets/photos/gallery3.jpg'
import gallery4 from '../../assets/photos/gallery4.jpg'
import gallery5 from '../../assets/photos/gallery5.JPG'
import gallery6 from '../../assets/photos/gallery6.jpg'
import gallery7 from '../../assets/photos/gallery7.jpg'
import gallery8 from '../../assets/photos/gallery8.jpg'
import gallery9 from '../../assets/photos/gallery9.jpg'
import gallery10 from '../../assets/photos/gallery10.jpg'
import gallery11 from '../../assets/photos/gallery11.jpg'
import gallery12 from '../../assets/photos/gallery12.jpg'
import gallery13 from '../../assets/photos/gallery13.jpg'
import gallery14 from '../../assets/photos/gallery14.jpg'
import gallery15 from '../../assets/photos/gallery15.jpg'
import gallery16 from '../../assets/photos/gallery16.jpg'
import gallery17 from '../../assets/photos/gallery17.jpg'
import gallery18 from '../../assets/photos/gallery18.jpg'
import { Covid19 } from './Covid19';

export function Photohome() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        gallery1,
        gallery2,      
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,      
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,      
        gallery15,
        gallery16,
        gallery17,
        gallery18
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="Photohome">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <div className="Photohome__bigtitle">
                            OUR JOURNEY GALLERY
                        </div>
                        <div className="Photohome__smalltitle">
                        💖 Memories warm me up from inside, but sometimes they tear me apart 💔
                        </div>
                    </Col>
                </Row>
            </Container>
          
           {images.map((src, index) => (
                <img
                    src={ src }
                    onClick={ () => openImageViewer(index) }
                    width="265"
                    key={ index }
                    style={{ 'margin': '4px', 'border-radius':'3px', 'cursor':'pointer'}}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    onClose={ closeImageViewer }                    
                />
            )}

            {/* TEMPOARY AREA */}
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <br></br>
                        <div className="Photohome__bigtitle">
                            Join hands to repel the epidemic of Covid 
                        </div>
                        <div className="Photohome__smalltitle">
                        ⚜️ Mental health & COVID-19: https://www.who.int/teams/mental-health-and-substance-use/covid-19 ⚜️
                        </div>
                        <Covid19 />
                    </Col>
                </Row>
            </Container>
            {/* TEMPOARY AREA */}
        </div>
    )
}