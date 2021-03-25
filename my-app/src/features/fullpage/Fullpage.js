import React from 'react';
import './Fullpage.css';
import { Container, Row, Col, Button } from 'reactstrap'
import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow"; 

export function Fullpage() {
    return (
        <div className="Fullpage">
            <ReactFullpage
                //fullpage options
                navigation = 'false'
                navigationPosition = 'right'
                showActiveTooltip = 'false'
                slidesNavigation = 'false'
                slidesNavPosition = 'bottom'
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000}
                scrollOverflow={true}
                sectionsColor = {['#4BBFC3', '#CCFF99', '#7BAABE', 'whitesmoke', '#000']}
                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                    <div className="section">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="12" lg="12">
                                <p>
                                    Welcome to <br></br>
                                    Best Anime Shop in Vietnam <br></br>
                                    <img alt="img" height={250} src="https://i.pinimg.com/originals/b6/e1/91/b6e1919647d7247bb9bc582353f90f5c.gif"></img>
                                </p>
                                <Button color="secondary" onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
                                </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        <p> 
                            Phone: 0123456789 <br></br>
                            Email: info@otakushop <br></br>
                            <img alt="img" height={250} src="https://static.wikia.nocookie.net/p__/images/2/28/Moroha.png/revision/latest?cb=20200719050641&path-prefix=protagonist"></img>
                        </p>
                        <Button color="secondary" onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </Button>
                    </div>
                    <div className="section">
                        <p>
                            Website made by Cong Son Hoang <br></br>                 
                            (Lelouch Vi Britannia) <br></br>
                            <img alt="img" height={250} src="https://steamuserimages-a.akamaihd.net/ugc/963099873035049668/397B115E5FF3FE0D1034C20E36063D631A5C4002/"></img>
                        </p>
                        <Button color="secondary" onClick={() => fullpageApi.moveTo(1, 0)}>
                            Click to back to the top
                        </Button>
                    </div>
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </div>
    )
}

