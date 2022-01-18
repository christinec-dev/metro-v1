import React from "react";
import { Card, CardBody, CardTitle , CardText, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import Rosa from "react-on-scroll-animation";

export default function BannerAbout() {
    return <>
        <Rosa animation={'fade-up'}>
        <div>
            <Card className="banner-about">
                <CardBody>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <CardTitle>
                            <h2>Our <span className="color-highlight-sec">Vision</span> </h2>
                        </CardTitle>
                        <CardText>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed diam eget risus varius blandit sem eget risus varius blandit.
                            </p>
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Donec id elit non mi porta <mark className="mark">diam eget risus varius gravida at eget metus!</mark></p>
                        </CardText>
                    </div>
                    <div className="col-lg-8 col-12">
                    <ListGroup className="list">
                    <ListGroupItem className="first-list">
                            <ListGroupItemHeading className="list-heading">
                               <mark className="mark-sec">We create flexible websites for startups         
                                </mark>       
                            </ListGroupItemHeading>
                            <ListGroupItemText className="list-description">
                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sem eget risus varius blandit.
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem className="second-list">
                            <ListGroupItemHeading className="list-heading">
                                <mark className="mark-sec">We create flexible designs for startups                     
                                </mark>               
                                </ListGroupItemHeading>
                            <ListGroupItemText className="list-description">
                                Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem className="third-list">
                            <ListGroupItemHeading className="list-heading">
                                <mark className="mark-sec">We create flexible marketing plans for startups                    
                                </mark>          
                            </ListGroupItemHeading>
                            <ListGroupItemText className="list-description">
                               Donec id elit non mi porta gravida at eget metus sed diam eget risus varius blandit.
                            </ListGroupItemText>
                        </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
                </CardBody>
            </Card>
        </div>
        </Rosa>
    </>
}