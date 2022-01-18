import React from "react";
import cust1 from "./images/cust_1.png"
import cust2 from "./images/cust_2.png"
import cust3 from "./images/cust_3.png"
import cust4 from "./images/cust_4.png"
import cust5 from "./images/cust_5.png"

export default function Brands() {
    return <>
        {/*This is needed for brand carousel*/}
        <section className="brand-carousel">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="container rounded">
                    <div className="slider">
                        <div className="logos">
                        <img src={cust1} alt=""/>
                        <img src={cust2} alt=""/>
                        <img src={cust3} alt=""/>
                        <img src={cust4} alt=""/>
                        <img src={cust5} alt=""/>
                        </div>
                        <div className="logos">
                        <img src={cust1} alt=""/>
                        <img src={cust2} alt=""/>
                        <img src={cust3} alt=""/>
                        <img src={cust4} alt=""/>
                        <img src={cust5} alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}