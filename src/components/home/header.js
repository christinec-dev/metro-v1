import React from "react";
import { Button } from 'reactstrap';
import blob from '../global/images/blob.png';
import main from '../global/images/main-c.png';
import { Link } from "react-router-dom";

export default function Header() {
    return <>
        <section className="main flex-container">
            <div className="flex-child main-left">
                <h1> 
                    We are a fake business that does <span className="color-highlight">business things!</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Button className="main-button">
                    <Link to="/about" className="no-style">
                        About Us
                    </Link>
                </Button>
            </div>
            <div className="flex-child main-right">
                <img src={main} alt="Logo" className="main-img"/>
                <img src={blob} alt="Logo" className="main-blob"/>;
            </div>
        </section>
    </>
}