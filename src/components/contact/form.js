import React from "react";
import { Form, Row, Label, Input, FormGroup, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function ContactForm() {
    return <>
        <section className="contact-form">
            <Form> 
                <h3> 
                    Get in <span className="color-highlight-sec">Touch</span>
                </h3> 
                <Row form>
                    <Col lg={12}>                       
                    <FormGroup>
                            <Label for="exampleName">
                                Name 
                            </Label>
                            <Input
                            id="exampleName"
                            name="name"
                            placeholder="Bobby Fake"
                            type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>                       <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                            <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="bobbyfake@gmail.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>  
                </Row>
                <Row form>
                    <Col md={12}>                       <FormGroup>
                            <Label for="exampleNumber">
                            Number
                            </Label>
                            <Input
                            id="exampleNumber"
                            name="number"
                            placeholder="+12 34 567 8901"
                            type="text"
                            />
                        </FormGroup>
                    </Col>  
                </Row>
                <Row form>
                    <Col md={12}>                       <FormGroup>
                            <Label for="exampleMessage">
                            Message
                            </Label>
                            <Input
                            id="exampleMessage"
                            name="message"
                            placeholder="What would you like us to help you with?"
                            type="textarea"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="main-button">
                    <Link to="/position" className="no-style">
                        Send Message
                    </Link>
                </Button>
            </Form>
        </section>
    </>
}