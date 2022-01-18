import React from "react";
import {Button, Card, CardBody, CardTitle } from "reactstrap";
import Rosa from "react-on-scroll-animation";
import { Link } from "react-router-dom";
import team1 from '../global/images/group2.jpg'

export default function Banner() {
    return <>
    <Rosa animation={'fade-left'}>
        <section className="banner-bottom">
            <Card className="banner-card">
                <CardBody>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 banner-title">
                            <CardTitle>
                                <h2>Want to <span className="color-highlight-sec">join our team?</span> Check  our career openings!</h2>
                            </CardTitle>
                            <Button className="main-button">
                                <Link to="/careers" className="no-style">
                                    Join The Dream Team
                               </Link>
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 banner-img">
                            <img src={team1} alt=""/>
                        </div>
                    </div>   
                </CardBody>
            </Card>
        </section>
     </Rosa>
    </>
}

