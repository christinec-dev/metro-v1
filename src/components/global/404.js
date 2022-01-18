import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import astro from "../global/images/astro-2.png";

export default function DefaultPage() {
    return <>
        <section className=" default-page">
            
            <div className="row">
                <div className="col-lg-6">
                    <img src={astro} alt="" className="astro-img"/>
                </div>
                <div className="default-desc col-lg-6 col-md-12">
                    <h1>404</h1>
                    <h2>UH OH! Did you get lost? :(</h2>
                    <p>The page that you are looking for does not exist.
                    It's a big website, so it's easy to get lost. Click the button below
                    to go back to the homepage!
                    </p>
                    <Button className="main-button">
                        <Link to="/home" className="no-style">
                            Home
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </>
}