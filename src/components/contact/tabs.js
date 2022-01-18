import React from "react";

export default function Tabs() {
    return <>
         <section className="contact-tabs">
                <div className="container">    
                    <h3> 
                        Contact Details
                    </h3> 
                    <div className="row">
                        <div className="col col-2">
                            <p>
                                <i class="fas fa-phone-square-alt"></i>
                            </p>
                        </div>
                        <div className="col col-10">
                            <p className="desc">
                                +123 345 6789
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-2">
                            <p>
                                <i class="fas fa-envelope"></i>
                            </p>
                        </div>
                        <div className="col col-10">
                            <p className="desc">
                                metro@notarealbusiness.com
                            </p>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col col-2">
                                <p>
                                    <i class="fas fa-map-marker-alt"></i>
                                </p>
                            </div>
                            <div className="col col-10">
                                <p className="desc">
                                    123 Imaginary Avenue, Fakeville ABC
                                </p>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col col-2">
                            <p>
                                <i class="fas fa-clock"></i>
                            </p>
                        </div>
                        <div className="col col-10">
                            <p className="desc">
                                9:00 am - 6:00 pm
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                        <h5> 
                            Chat Via Social Media
                        </h5> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <p>
                                <a href=""><i class="fab fa-linkedin"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href=""><i class="fab fa-discord"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    </>
}