import React from "react";
import { Button } from 'reactstrap';
import blob from '../global/images/blob.png';
import main from '../global/images/main-3.png';
import { Link } from "react-router-dom";
import Brands from "../global/brand";

export default function Header() {
    return <>
      <section className="main flex-container">
            <div className="flex-child main-left">
                <h1> 
                    Join a Global <span className="color-highlight">Team</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin. Sed est sed hendrerit commodo turpis et eget. Amet fermentum dolor.
                </p>
                <p>
                    Sed est sed hendrerit commodo turpis et eget. Amet fermentum dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin. 
                </p>
                <Button className="main-button">
                    <Link to="/contact" className="no-style">
                        Request Interview
                    </Link>
                </Button>
            </div>
            <div className="flex-child main-right">
                <img src={main} alt="Logo" className="main-img-3"/>;
                <img src={blob} alt="Logo" className="main-blob"/>;
            </div>
           
        </section>  
        <section className="brands">
            {/*This is needed for brand carousel*/}
            <Brands/>
        </section> 
    </>
}