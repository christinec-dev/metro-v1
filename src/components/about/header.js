import React from "react";
import { Button } from 'reactstrap';
import blob from '../global/images/blob.png';
import main from '../global/images/main-2.png';
import { Link } from "react-router-dom";

export default function Header() {
    return <>
      <section className="main flex-container">
            <div className="flex-child main-right">
                <img src={main} alt="Logo" className="main-img-2"/>;
                <img src={blob} alt="Logo" className="main-blob-about"/>;
            </div>
            <div className="flex-child main-left">
                <h1> 
                    We are the leading fake business using <span className="color-highlight">fake tools!</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin. Sed est sed hendrerit commodo turpis et eget. Amet fermentum dolor.
                </p>
                <Button className="main-button">
                    <Link to="/contact" className="no-style">
                        Contact Us
                    </Link>
                </Button>
            </div>
        </section>
    </>
}