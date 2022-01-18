import React from "react";
import { Button } from "reactstrap";
import Rosa from "react-on-scroll-animation";
import { Link } from "react-router-dom";

export default function Positions() {
    return <>
        <Rosa animation={'fade-left'}>
            <section className="position-career">
                <div className="container">
                    <h2> 
                        Open <span className="color-highlight-sec">Positions</span>
                    </h2>
                    <div className="row pos-row">
                        <div className="col-4">
                            <h3>Marketing Intern</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Full Time</h5>
                                </div>
                                <div className="col-6">
                                    <h5>
                                        <span className="color-highlight-sec">Office</span>
                                    </h5>
                                </div>
                             </div>
                            <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                        <div className="col-4">
                            <h3>UX Designer</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Full Time</h5>
                                </div>
                                <div className="col-6">
                                    <h5><span className="color-highlight-sec">Remote</span></h5>
                                </div>
                             </div>
                             <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                        <div className="col-4">
                            <h3>Sales Intern</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Part Time</h5>
                                </div>
                                <div className="col-6">
                                    <h5><span className="color-highlight-sec">Office</span></h5>
                                </div>
                             </div>
                             <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="row pos-row">
                        <div className="col-4">
                            <h3>HR Manager</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Full Time</h5>
                                </div>
                                <div className="col-6">
                                    <h5><span className="color-highlight-sec">Remote</span></h5>
                                </div>
                            </div>
                             <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                        <div className="col-4">
                             <h3>Junior JS Developer</h3>
                             <div className="row">
                                <div className="col-6">
                                    <h5>Full Time</h5>
                                </div>
                                <div className="col-6">
                                    <h5><span className="color-highlight-sec">Hybrid</span></h5>
                                </div>
                             </div>
                             <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                        <div className="col-4">
                            <h3>Accountant</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Part Time</h5>
                                </div>
                                <div className="col-6">
                                     <h5><span className="color-highlight-sec">Remote</span></h5>
                                </div>
                            </div>
                             <Button className="main-button">
                                <Link to="/position" className="no-style">
                                    View Job
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Rosa>
    </>
}