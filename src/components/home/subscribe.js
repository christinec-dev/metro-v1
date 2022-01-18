import React from "react";
import {Form, Label, FormGroup,Input, Button, Card, CardBody, CardTitle } from "reactstrap";
import Rosa from "react-on-scroll-animation";
import { Link } from "react-router-dom";

export default function Subscribe() {
    return <>
    <Rosa animation={'fade-left'}>
        <section className="section container-fluid subscribe">
            <Card className="subscribe-card">
                <CardTitle className="subscribe-card-title">
                        <h3>Subscribe to our weekly newsletter for <span className="color-highlight-sec"> more magic!</span></h3>
                </CardTitle>
                <CardBody className="subscribe-card-body">
                    <Form inline>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <div className="row">
                            <div className="col-lg-1 col-md-12 col-sm-12">
                                <Label className="me-sm-2" for="exampleName">
                                Name
                                </Label>
                            </div>
                            <div className="col-lg-11 col-md-12 col-sm-12">
                                <Input
                                id="exampleName"
                                name="name"
                                placeholder="Bobby Fakeperson"
                                type="string"
                                />
                            </div>
                        </div>
                        </FormGroup>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0 sub-form">
                            <div className="row">
                                <div className="col-lg-1 col-md-12 col-sm-12">
                                    <Label
                                    className="me-sm-2"
                                    for="exampleEmail"
                                    >
                                    Email
                                    </Label>
                                </div>
                                <div className="col-lg-11 col-md-12 col-sm-12">
                                    <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="bobby@fakeperson.com"
                                    type="email"
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <Button className="main-button subscribe-btn">
                            <Link to="/" className="no-style">
                                Subscribe
                            </Link>
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    </Rosa>
</>
}

