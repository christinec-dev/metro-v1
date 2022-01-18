import React from "react";
import { Button } from 'reactstrap';import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './testimonies.css';
import { Link } from "react-router-dom";
import Rosa from "react-on-scroll-animation";
import client1 from "../global/images/c1.jpg"
import client3 from "../global/images/c2.jpg"
import client2 from "../global/images/c3.jpg"
import Brands from "../global/brand";

export default function Testimonies() {
    return <> 
        <Rosa animation={'fade-down-right'}>
            {/*This is needed for testimonies carousel*/}
            <section className="testimonies flex-container">
                <div className="flex-child testimonies-right col-lg-3 col-md-12 col-sm-12">
                    <h2> Client <span className="color-highlight-sec">Testimonies</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Button className="main-button">
                        <Link to="/contact" className="no-style">
                            Contact Us
                        </Link>
                    </Button>
                </div>
                <div className="flex-child col-lg-9 col-md-12 col-sm-12">
                    <Carousel className="carousal-body"
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                    >
                    <div className="test-1">
                        <img src={client1} alt=""  className="testimonial_img"/>
                        <div className="MainCarousel">
                            <h3>Maggie Endelburg</h3>
                            <h4>Unreal <i class="fas fa-circle"></i> CEO </h4>
                            <p>
                                Metro is the real deal! <mark className="mark">   Best. Service. Ever!</mark> I have gotten at least 50 times the value from Metro.
                            </p>
                        </div>
                    </div>
                    <div className="test-2">
                        <img src={client2} alt="" className="testimonial_img"/>
                        <div className="MainCarousel">
                            <h3>Jackie Beck</h3>
                            <h4>Fakr <i class="fas fa-circle"></i> Founder </h4>
                            <p>
                                The <mark className="mark">best on the net!</mark> We were treated like royalty. Metro is the real deal!
                            </p>
                        </div>
                    </div>
                    <div className="test-3">
                    <img src={client3} alt="" className="testimonial_img" />
                        <div className="MainCarousel">
                            <h3>Timothy Gam</h3>
                            <h4>Notreal! <i class="fas fa-circle"></i> Lead Developer </h4>
                            <p>
                                Metro is exactly what our business has been lacking. <mark className="mark">They've really saved me time and effort.</mark> I highly endorse them.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
        {/*This is needed for brand carousel*/}
       <Brands/>
    </Rosa>
</>
}