import React from "react";
import { Container, Row, Col } from "reactstrap";

function AboutMira() {
    return (
        <div className="section section-about-mira text-center" id="about-mira">
            <Container>
                <h3 className="title">About MIRA</h3>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <p>
                            MIRA isn't just another digital assistant; it's a revolution in the mortgage lending world. Powered by cutting-edge AI technology, MIRA streamlines the mortgage application process, bridging the gap between applicants and loan officers. <br/> 
                            With MIRA, users gain a reliable partner that simplifies complex lending jargon, automates mundane tasks, and offers insights tailored to individual financial situations. <br />
                            For loan officers, MIRA acts as an efficient assistant, handling routine queries and ensuring seamless interactions. <br />
                            Dive into the future of mortgage lending with MIRA, where innovation meets convenience.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMira;
