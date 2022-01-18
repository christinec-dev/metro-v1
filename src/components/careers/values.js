import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardGroup , CardText, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import Rosa from "react-on-scroll-animation";

export default function Values() {
    return <>
        <Rosa animation={'fade-up'}>
        <div>
            <Card className="banner-careers">
                <CardBody> 
                    <h2> 
                        Our <span className="color-highlight-sec">Company Values</span>
                    </h2>
                    <p className="desc-p">
                        Sed est sed hendrerit commodo turpis et eget. Amet fermentum dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin.
                    </p>
                <CardGroup className="card-group"> 
                        <Card className="card col-md-12">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h4" className="card-sub">
                                    <div className="flex-container">
                                        <div className="flex-child row">
                                            <div className="col-lg-2 col-6">
                                                <p><i class="fas fa-heart"></i></p>
                                            </div>
                                            <div className="col-lg-2 col-6">
                                                <p>01</p>
                                            </div>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Passion
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>
                        
                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h4" className="card-sub">
                                    <div className="flex-container">
                                    <div className="flex-child row">
                                            <div className="col-lg-2 col-6">
                                                <p><i class="fas fa-book"></i></p>
                                            </div>
                                            <div className="col-lg-2 col-6">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Graft
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h4" className="card-sub">
                                    <div className="flex-container row">
                                    <div className="flex-child row">
                                            <div className="col-lg-2 col-6">
                                                <p><i class="fas fa-trophy"></i></p>
                                            </div>
                                            <div className="col-lg-2 col-6">
                                                <p>03</p>
                                            </div>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Ambition
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card className="card">
                                <CardBody className="card-body">
                                    <CardSubtitle tag="h4" className="card-sub">
                                    <div className="flex-container">
                                    <div className="flex-child row">
                                            <div className="col-lg-2 col-6">
                                                <p><i class="fas fa-user-friends"></i></p>
                                            </div>
                                            <div className="col-lg-2 col-6">
                                                <p>04</p>
                                            </div>
                                        </div>
                                    </div>
                                    </CardSubtitle>
                                    <CardTitle tag="h3" className="card-title">
                                        Collaboration  
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                </CardBody>
                            </Card> 
                        </CardGroup>
                </CardBody>
            </Card>
        </div>
        </Rosa>
    </>
}