import React from "react";
import { Form, FormGroup, FormText, Label, Input, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Application() {
    return <>
        <section className="application">
            <Form>
                <FormGroup row>
                    <Label for="exampleName" sm={12}>
                        First Name
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="exampleName"
                            name="firstName"
                            placeholder="Bobby"
                            type="text"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSurname" sm={12}>
                        Last Name
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="exampleSurname"
                            name="firstName"
                            placeholder="Fake"
                            type="text"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleEmail"
                    sm={12}
                    >
                    Email
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="bobbyfake@gmail.com"
                        type="email"
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="telNumber"
                    sm={12}
                    >
                    Contact No.
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="telNumber"
                        name="tel"
                        placeholder="+012 345 6789"
                        type="text"
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={12}>
                        Message to Hiring Manager
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleFile"
                    sm={12}
                    >
                    Resume
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                    />
                    <FormText>
                         <p>
                            * Browse resume or just drop it here
                        </p>
                    </FormText>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Button className="app-btn">
                            <Link to="/position" className="no-style">
                                Submit Application
                            </Link>
                        </Button>
                    </Col>
                    <Col>
                        <div className="row">
                            <div className="col-lg-12">
                                <Button className="app-btn-sec">
                                    <i class="fab fa-linkedin"></i>
                                </Button>
                                <Button className="app-btn-sec">
                                    <i class="fas fa-share"></i>
                                </Button>
                                <Button className="app-btn-sec">
                                    <i class="fab fa-twitter"></i>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        </section>
    </>
}