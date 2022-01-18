import React from "react";
import waves from '../global/images/waves-x.png';
import wavesBottom from '../global/images/waves-h.png';
import blobs from '../global/images/blobs-f.png';
import { Card, CardBody, CardGroup, CardSubtitle, CardText, CardTitle } from "reactstrap";
import Rosa from "react-on-scroll-animation";

export default function Services() {
    return <>  
        <section className="services">
            <img src={waves} alt="Logo" className="waves-banner"/> 
            <Rosa animation="fade-up" duration={300} delay={50}>    
                <div className="seperator">
                    <img src={blobs} alt="Logo" className="seperator"/>
                </div>
                <section className="services-main container-fluid">
                    <h2>   
                        <span className="color-highlight-sec">Our Services</span>
                    </h2>
                </section>
                <section className="services-cards container-fluid">
                    <CardGroup className="card-group"> 
                        <Card className="card col-md-12">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h6" className="card-sub">
                                    <div className="flex-container">
                                        <div className="flex-child">
                                            <h4>01</h4>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Design
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>
                        
                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h6" className="card-sub">
                                    <div className="flex-container">
                                        <div className="flex-child col-12">
                                            <h4>02</h4>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Development
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h6" className="card-sub">
                                    <div className="flex-container">
                                        <div className="flex-child">
                                            <h4>03</h4>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Marketing
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h6" className="card-sub">
                                    <div className="flex-container">
                                        <div className="flex-child">
                                            <h4>04</h4>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        SEO                        
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card> 
                        </CardGroup>
                    </section> 
                </Rosa>
        </section>            
    <img src={wavesBottom} alt="Logo" className="waves-bottom"/>
</>
}