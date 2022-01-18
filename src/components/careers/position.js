import React from "react";
import { Button, Card, CardGroup, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import Navigation from "../global/navbar";
import cardImg from "../global/images/group1.jpg"
import Application from "./application";
import Footer from "../global/footer";
import { Link } from "react-router-dom";

export default function Position() {
    return <>
      <Navigation/>
            <section className="position-m">
                <div className="container">
                    <h2> 
                        Job <span className="color-highlight-sec">Title</span>
                    </h2>  
                    <Button className="pos-button">
                        Technology
                    </Button>
                    <Button className="pos-button">
                        Development
                    </Button>
                    <Button className="pos-button">
                        Full Time
                    </Button>
                    <div className="row">
                        <div className="col-lg-7">
                        <div className="row">
                        <div className="col-12">
                            <h4>Company Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet. Id nihil accusamus sit facere debitis et internos consequatur ad internos doloremque? Sed cumque sunt sit accusantium suscipit aut tenetur quibusdam est aliquam labore! Qui sint omnis rem doloremque omnis et rerum tempore et numquam aliquid est saepe error rem dolore odio qui ratione error.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Job Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet. Id nihil accusamus sit facere debitis et internos consequatur ad internos doloremque? Sed cumque sunt sit accusantium suscipit aut tenetur quibusdam est aliquam labore! Qui sint omnis rem doloremque omnis et rerum tempore et numquam aliquid est saepe error rem dolore odio qui ratione error.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Qualifications</h4>
                            <p>
                                <h6>Responsibilities:</h6> 
                                <ul>
                                    <li>Excepteur sint obcaecat adipisci</li>
                                    <li>Excepteur sint obcaecat officia deserunt mollit anim id est laborum</li>
                                    <li>Excepteur sint obcaecat exercitationem ullam </li>
                                    <li>Excepteur sint obcaecat cupiditat non proident</li>
                                </ul>

                                <h6>Requirements:</h6> 
                                <ul>
                                    <li>Excepteur sint obcaecat exercitationem ullam </li>
                                    <li>Excepteur sint obcaecat cupiditat non proident</li>
                                    <li>Excepteur sint obcaecat  officia deserunt mollit anim id est laborum</li>
                                </ul>

                                <h6>Desirable (Optional):</h6> 
                                <ul>
                                    <li>Excepteur sint obcaecat exercitationem ullam </li>
                                    <li>Excepteur sint obcaecat cupiditat non proident</li>
                                    <li>Excepteur sint obcaecat adipisci</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Additional Information</h4>
                            <p>
                                Lorem ipsum dolor sit amet. Id nihil accusamus sit facere debitis et internos consequatur ad internos doloremque? Sed cumque sunt sit accusantium suscipit aut tenetur quibusdam est aliquam labore! Qui sint omnis rem doloremque omnis et rerum tempore et numquam aliquid est saepe error rem dolore odio qui ratione error.
                            </p>
                            <p>
                                Qui doloribus voluptatum sed saepe Quis est animi fugiat rem commodi veritatis ex aliquam facilis est assumenda necessitatibus. Ut sunt dolorem ut quae assumenda et amet reprehenderit ut optio autem aut blanditiis libero.
                            </p>
                            <p>
                                Aut dolorem impedit 33 laudantium maxime et deleniti magni. Nam ratione minus aut deserunt eos dolor mollitia non sint tempore aut magnam odio!
                            </p>
                            <Button className="main-button">
                            <Link to="/careers" className="no-style">
                                View Other Positions
                            </Link>
                        </Button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                        <CardGroup>
                            <Card>
                                <CardImg
                                    alt=""
                                    src={cardImg}
                                    top
                                    width="100%"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h4" className="card-title">
                                        Want to Apply?
                                    </CardTitle>
                                    <CardText className="card-p">
                                        Aut dolorem impedit laudantium non sint tempore aut magnam odio!
                                    </CardText>

                                    <Application/>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </div>
                    </div>
                </div>
                <Footer/>
        </section>
    </>
}