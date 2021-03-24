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
                sectionsColor = {['#CCFF99', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']}
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
                            <img alt="img" height={250} src="https://lh3.googleusercontent.com/proxy/jcFllG2IZIE3Lt3uh3hAuGyhEiFCZibbjrsTiVgAkYcOalSW1EwoWZ5xsWQMV_ICj4ari-89HRhS7JIA8tAmwPCvd7v3Mb59i0PcAyDB"></img>
                        </p>
                        <Button color="secondary" onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </Button>
                    </div>
                    <div className="section">
                        <p>
                            Website made by Cong Son Hoang <br></br>                 
                            (Lelouch Vi Britannia) <br></br>
                            <img alt="img" height={250} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j4j0-df87620c-070f-4896-990c-c444944041a1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDFqNGowLWRmODc2MjBjLTA3MGYtNDg5Ni05OTBjLWM0NDQ5NDQwNDFhMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5JXAeWUpVCcXFAO6DkE9iAc_z24v2kmKqfpQHbJV0ZU"></img>
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

